
import validator = require('validator');

interface IRuleConfig {
	field: string;
	message: string;
	validIf(param:string):boolean;
}

interface IValidationFieldResult {
	isValid: boolean;
	message: string;
}

interface IValidationResult {
	validations: {[x:string]: IValidationFieldResult};
	formIsValid: boolean;
}

//****************************************************************************
//  Result Object class
//****************************************************************************

class ValidationObject {
   public isValid: boolean;
   public message: string;

   constructor(){
      this.isValid = true;
      this.message = null;
   }
}


//****************************************************************************
// Rule class
//****************************************************************************

class Rule {
	public field: string;
   public message: string;
   public active: boolean;
   public validIf:any;
   
   public constructor(rule:IRuleConfig){
      this.field = rule.field;
      this.message = rule.message;
      this.validIf = rule.validIf;
      this.active = false;
   }
}


//****************************************************************************
// Validation Class
//****************************************************************************

export default class FormValidation {

	// properties
   public static test = validator;
	private rules:Rule[];
	private result:IValidationResult;
   private active: boolean;

	// constructor
	constructor(rules:IRuleConfig[]) {
      this.rules = [];
      rules.forEach((rule)=> { 
         this.rules.push(new Rule(rule));
      });
      this.result = this.getDefaultResultObject();
      this.active = false;    
   }
   
   public activateAllRules() {
      this.beginValidation();
      this.rules.forEach( (rule) => {
         rule.active = true;
      });
   }

   public activateRule(field:string) {
      this.beginValidation();
      this.rules.forEach((rule) => {
            if (rule.field === field) {
               rule.active = true;
            }
         }
      );
   }

   public beginValidation() {
      this.active = true;
   }
      
   public endValidation() {
      this.active = false;      
   }

	// create all valid validation response
	public getDefaultResultObject() {
		let validation: any = [];

		this.rules.map((rule) => {
				validation[rule.field] = new ValidationObject();
			}
		);

		return { formIsValid: true, validations: {...validation} };
   }
   
   public validateAgainstRule(string:string, rule:Rule){
      const isValid = rule.validIf(string);     
      const message = (isValid) ? null : rule.message;           
      return {isValid, message};   
   }

   public ruleHasMatchingField(field:string, form:any){
      if (field in form) {
         return true;
      } else {
         console.log("there was ValidationRule with no matching state-field");
         return false;
      }
   }

   public ruleIsActive(rule:Rule){
      return rule.active;
   }

	// validate rules against received form
	public validate(form:any) {

		// dont validate if stopped 
		if (!this.active) { return false; }
		
		// assume all state fields valid
		let result = this.getDefaultResultObject();

		// compare rules to form fields
		this.rules.forEach( (rule) => 
      {
         const field = rule.field;
         const hasMatchingField = this.ruleHasMatchingField(field, form);
         const ruleIsActive = this.ruleIsActive(rule);
         const fieldIsValid = result.validations[field].isValid;

         if (ruleIsActive && hasMatchingField && fieldIsValid) {
            const formField = (form[field]).toString();				
            result.validations[field] = this.validateAgainstRule(formField, rule);
         }
      });
      
      result.formIsValid = this.isFormValid(result);
      this.result = result;
      return this.result;
   }

   public isFormValid(result: IValidationResult){
      let formIsValid = true;

      for (const i in result.validations) {
			if ( !result.validations[i].isValid ){
				formIsValid = false;				
			}
		}

      return formIsValid;
   }

	public isValid(field:string){
		if (field in this.result.validations){
			let validity = this.result.validations[field].isValid;
			return validity;
		}		
		return null;
	}

	public getMessage(field:string){
		if (field in this.result.validations){
			let message = this.result.validations[field].message;
			return message;
		}		
		return null;
	}

	public getValidatedMessage(field:string){
		if (field in this.result.validations){
			if (!this.result.validations[field].isValid) {
				let message = this.result.validations[field].message;
				return message;
			}
		}		
		return null;
	}
}

