
import validator = require('validator');


//****************************************************************************
// Validation Class
// Rule = rule by which class validates
// Field = string that class validates
//****************************************************************************

export default class FormValidation {

	// properties
   public static test = validator;
	private rules:Rule[];
	private result:IValidationResult;
   private validationIsActivated: boolean;

	// constructor
	constructor(rules:IRuleConfig[]) {
      this.rules = this.initializeRuleArray(rules);
      this.result = this.createAllRulesAreValidResult();
      this.validationIsActivated = false;    
   }

   // validate received key-value pairs (form)
   public validate(formFields:any) {

      // dont validate if stopped 
      if (!this.validationIsActivated) { return false; }

      // assume all key-value pairs valid
      let result = this.createAllRulesAreValidResult();

      // compare key-value pairs against validation rules
      this.rules.forEach( (rule) => 
      {
         const ruleField = rule.field;
         const hasMatchingField = this.ruleHasMatchingField(ruleField, formFields);
         const ruleIsActive = this.ruleIsActive(rule);
         const fieldIsStillValid = result.validations[ruleField].isValid;

         if (ruleIsActive && hasMatchingField && fieldIsStillValid) {
            const formValue = (formFields[ruleField]).toString();				
            result.validations[ruleField] = this.validateAgainstRule(formValue, rule);
         }
      });

      result.formIsValid = this.isFormValid(result);
      this.result = result;
      return this.result;
   }

   public initializeRuleArray(rules:IRuleConfig[]){
      const ruleArray = [] as Rule[];
      rules.forEach((rule)=> { 
         ruleArray.push(new Rule(rule));
      });
      return ruleArray;
   }

   public beginValidation() {
      this.validationIsActivated = true;
   }
      
   public endValidation() {
      this.validationIsActivated = false;      
   }
   
   public validateAgainstRule(string:string, rule:Rule){
      const isValid = rule.validIf(string);     
      const message = (isValid) ? null : rule.message;           
      return {isValid, message};   
   }

   public ruleHasMatchingField(ruleField:string, formFields:any){
      if (ruleField in formFields) {
         return true;
      } else {
         console.log("there was ValidationRule with no matching field");
         return false;
      }
   }

   public ruleIsActive(rule:Rule){
      return rule.active;
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
   
   // create all valid validation response
	public createAllRulesAreValidResult() {
		let validation: any = [];
		this.rules.map((rule) => {validation[rule.field] = new ValidationObject();});
		return { formIsValid: true, validations: {...validation} };
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


