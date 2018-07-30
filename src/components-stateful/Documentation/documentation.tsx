
//libs
import * as React from 'react';
import Mark = require("mark.js");
//import ScrollSpy from 'scrollspy-js';

//components
import Input from '../../components/Textinput_material';
import CLOCK from '../../utils/clockModule';


class ScrollNav extends React.Component {
   public render() {
      return (
         <nav className="scrollNav" id="js-scrollspy">
            <ul>
               <li><a href="#scrollOne">link1</a></li>
               <li><a href="#scrollTwo">link2</a></li>
               <li><a href="#scrollThree">link3</a></li>
               <li><a href="#scrollFour">link4</a></li>
               <li><a href="#scrollFive">link5</a></li>
            </ul>
         </nav>
      );
   }
}

class ScrollContent extends React.Component {
   public render() {
      return (
         <div className="scrollContent">

            <h2><a id="scrollOne" href="#">Cats</a></h2>
            <p className="cont">The domestic cat (Felis silvestris catus or Felis catus)[1][5] is a 
            small, typically furry, carnivorous mammal. They are often called house cats[6] when kept as 
            indoor pets or simply cats when there is no need to distinguish them from other felids and 
            felines. They are often valued by humans for companionship and for their ability to hunt vermin. 
            There are more than seventy cat breeds recognized by various cat registries.

            Cats are similar in anatomy to the other felids, with a strong flexible body, quick reflexes, 
            sharp retractable claws and teeth adapted to killing small prey. Cat senses fit a crepuscular 
            and predatory ecological niche. Cats can hear sounds too faint or too high in frequency for 
            human ears, such as those made by mice and other small animals. They can see in near darkness. 
            Like most other mammals, cats have poorer color vision and a better sense of smell than humans. 
            Cats, despite being solitary hunters, are a social species, and cat communication includes the use 
            of a variety of vocalizations (mewing, purring, trilling, hissing, growling and grunting) as well 
            as cat pheromones and types of cat-specific body language.[7]

            Cats have a high breeding rate.[8] Under controlled breeding, they can be bred and shown as 
            registered pedigree pets, a hobby known as cat fancy. Failure to control the breeding of pet 
            cats by neutering, as well as the abandonment of former household pets, has resulted in large 
            numbers of feral cats worldwide, requiring population control.[9] In certain areas outside cats' 
            native range, this has contributed, along with habitat destruction and other factors, to the 
            extinction of many bird species. Cats have been known to extirpate a bird species within specific 
            regions and may have contributed to the extinction of isolated island populations.[10] Cats are 
            thought to be primarily responsible for the extinction of 33 species of birds,
            [better source needed] and the presence of feral and free-ranging cats makes some otherwise 
            suitable locations unsuitable for attempted species reintroduction.[11]

            Because cats were venerated in ancient Egypt, they were commonly believed to have been 
            domesticated there,[12] but there may have been instances of domestication as early as the 
            Neolithic from around 9,500 years ago (7500 BC).[13] A genetic study in 2007[14] concluded that 
            all domestic cats are descended from Near Eastern wildcats, having diverged around 8000 BC in 
            the Middle East.[12][15] A 2016 study found that leopard cats were undergoing domestication 
            independently in China around 5500 BC, though this line of partially domesticated cats leaves 
            no trace in the domesticated populations of today.[16][17] A 2017 study confirmed that domestic 
            cats are descendants of those first domesticated by farmers in the Near East around 9,000 years 
            ago.[18][19]

            As of a 2007 study, cats are the second-most popular pet in the U.S. by number of pets owned, 
            behind freshwater fish.[20] In a 2010 study, they were ranked the third-most popular pet in the 
            UK, after fish and dogs, with around 8 million being owned.[21] </p>

            <p className="cont">The domestic cat is believed to have evolved from the Near Eastern wildcat,
             whose range covers vast portions of the Middle East westward to the Atlantic coast of Africa.
             [22][23] Between 70,000 and 100,000 years ago the animal gave rise to the genetic lineage that 
             eventually produced all domesticated cats,[24] having diverged from the Near Eastern wildcat 
             around 8,000 BC in the Middle East.[12][15]

            The felids are a rapidly evolving family of mammals that share a common ancestor only 10–15 
            million years ago[25] and include lions, tigers, cougars and many others. Within this family, 
            domestic cats (Felis catus) are part of the genus Felis, which is a group of small cats 
            containing about seven species (depending upon classification scheme).[1][26] Members of 
            the genus are found worldwide and include the jungle cat (Felis chaus) of southeast Asia,
            European wildcat (F. silvestris silvestris), African wildcat (F. s. lybica), the Chinese 
            mountain cat (F. bieti), and the Arabian sand cat (F. margarita), among others.[27]</p>

            <h2><a id="scrollTwo" href="#">Taxonomy</a></h2>
            <p className="cont">The domestic cat was first classified as Felis catus by Carl Linnaeus in 
            the 10th edition of his Systema Naturae published in 1758.[1][2] Because of modern phylogenetics, 
            domestic cats are usually regarded as another subspecies of the wildcat, F. silvestris.[1][28][29] 
            This has resulted in mixed usage of the terms, as the domestic cat can be called by its 
            subspecies name, Felis silvestris catus.[1][28][29] Wildcats have also been referred to as 
            various subspecies of F. catus,[29] but in 2003, the International Commission on Zoological 
            Nomenclature fixed the name for wildcats as F. silvestris.[30] The most common name in use for 
            the domestic cat remains F. catus. Sometimes, the domestic cat has been called Felis 
            domesticus[31] as proposed by German naturalist J.C.P. Erxleben in 1777,[32] but these are not 
            valid taxonomic names and have been used only rarely in scientific literature.[33] A 
            population of Transcaucasian black feral cats was once classified as Felis daemon (Satunin 1904) 
            but now this population is considered to be a part of domestic cat.[34]

            All the cats in this genus share a common ancestor that is believed to have lived around 
            6–7 million years ago in the Near East (the Middle East).[35] The exact relationships within 
            the Felidae are close but still uncertain,[36][37] e.g. the Chinese mountain cat is sometimes 
            classified (under the name Felis silvestris bieti) as a subspecies of the wildcat, like the 
            North African variety F. s. lybica.[28][36]</p>

            <h2><a id="scrollThree" href="#">otsikko</a></h2>
            <p className="cont">Domestic cats are similar in size to the other members of the genus Felis, 
            typically weighing between 4 and 5 kg (9 and 10 lb).[36] Some breeds, such as the Maine Coon,
            can occasionally exceed 11 kg (24 lb). Conversely, very small cats, less than 2 kg (4 lb), have 
            been reported.[59] The world record for the largest cat is 21 kg (50 lb).[60] The smallest 
            adult cat ever officially recorded weighed around 1 kg (2 lb).[60] Feral cats tend to be 
            lighter as they have more limited access to food than house cats. In the Boston area, the 
            average feral adult male will weigh 4 kg (9 lb) and average feral female 3 kg (7 lb).[61] 
            Cats average about 23–25 cm (9–10 in) in height and 46 cm (18 in) in head/body length 
            (males being larger than females), with tails averaging 30 cm (12 in) in length.[62] </p>

            <h2><a id="scrollFour" href="#">otsikko</a></h2>
            <p className="cont">Curabitur aliquet semper molestie. Vivamus non faucibus dolor. Aliquam 
            erat volutpat. Curabitur eget arcu turpis. Ut vitae consectetur turpis. Pellentesque habitant 
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vehicula 
            finibus turpis. Maecenas suscipit et eros nec suscipit. Mauris placerat enim et ligula 
            vulputate, at varius ligula condimentum. Integer volutpat tincidunt tincidunt. Integer 
            molestie, metus at eleifend fringilla, odio orci ultrices ligula, in rhoncus metus metus 
            vitae metus. Quisque volutpat laoreet tempus. Cras tincidunt mattis elit, nec scelerisque 
            ipsum placerat eget. Praesent dapibus velit vestibulum neque euismod ultrices. Mauris 
            tellus sapien, feugiat quis consectetur vel, convallis nec nisi. Curabitur vel blandit nulla. </p>
            <p className="cont"> Curabitur aliquet semper molestie. Vivamus non faucibus dolor. 
            Aliquam erat volutpat. Curabitur eget arcu turpis. Ut vitae consectetur turpis. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis 
            egestas. Quisque vehicula finibus turpis. Maecenas suscipit et eros nec suscipit. 
            Mauris placerat enim et ligula vulputate, at varius ligula condimentum. Integer 
            volutpat tincidunt tincidunt. Integer molestie, metus at eleifend fringilla, 
            odio orci ultrices ligula, in rhoncus metus metus vitae metus. kissa Quisque 
            vompatti volutpat laoreet tempus. Cras tincidunt mattis elit, nec scelerisque 
            ipsum placerat eget. Praesent dapibus velit vestibulum neque euismod ultrices. 
            Mauris tellus sapien, feugiat quis consectetur vel, convallis nec nisi. 
            Curabitur vel blandit nulla. </p>
            <p className="cont">Curabitur aliquet semper molestie. Vivamus non faucibus dolor. 
            Aliquam erat volutpat. Curabitur eget arcu turpis. Ut vitae consectetur turpis. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
            turpis egestas. Quisque vehicula finibus turpis. Maecenas suscipit et eros nec 
            suscipit. Mauris placerat enim et ligula vulputate, at varius ligula condimentum.
            Integer volutpat tincidunt tincidunt. Integer molestie, metus at eleifend fringilla, 
            odio orci ultrices ligula, in rhoncus metus metus vitae metus. Quisque volutpat laoreet 
            tempus. Cras tincidunt mattis elit, nec scelerisque ipsum placerat eget. Praesent dapibus 
            velit vestibulum neque euismod ultrices. Mauris tellus sapien, feugiat quis consectetur 
            vel, convallis nec nisi. Curabitur vel blandit nulla. </p>

            <h2><a id="scrollFive" href="#">otsikko</a></h2>
            <p className="cont">Curabitur aliquet semper molestie. Vivamus non faucibus dolor. Aliquam erat volutpat. 
            Curabitur eget arcu turpis. Ut vitae consectetur turpis. Pellentesque habitant morbi tristique senectus et 
            netus et malesuada fames ac turpis egestas. Quisque vehicula finibus turpis. Maecenas suscipit et eros 
            nec suscipit. Mauris placerat enim et ligula vulputate, at varius ligula condimentum. Integer volutpat 
            tincidunt tincidunt. Integer molestie, metus at eleifend fringilla, odio orci ultrices ligula, in rhoncus 
            metus metus vitae metus. Quisque volutpat laoreet tempus. Cras tincidunt mattis elit, nec scelerisque ipsum 
            placerat eget. Praesent dapibus velit vestibulum neque euismod ultrices. Mauris tellus sapien, feugiat 
            quis consectetur vel, convallis nec nisi. Curabitur vel blandit nulla. </p>
            <p className="cont">Curabitur aliquet semper molestie. Vivamus non faucibus dolor. Aliquam erat volutpat. 
            Curabitur eget arcu turpis. Ut vitae consectetur turpis. Pellentesque habitant morbi tristique senectus 
            et netus et malesuada fames ac turpis egestas. Quisque vehicula finibus turpis. Maecenas suscipit et 
            eros nec suscipit. Mauris placerat enim et ligula vulputate, at varius ligula condimentum. Integer 
            volutpat tincidunt tincidunt. Integer molestie, metus at eleifend fringilla, odio orci ultrices 
            ligula, in rhoncus metus metus vitae metus. koira Quisque volutpat laoreet tempus. Cras tincidunt 
            mattis elit, nec scelerisque ipsum placerat eget. Praesent dapibus velit vestibulum neque euismod 
            ultrices. Mauris tellus sapien, feugiat quis consectetur vel, convallis nec nisi. Curabitur vel 
            blandit nulla. </p>
            <p className="cont">Curabitur aliquet semper molestie. Vivamus non faucibus dolor. Aliquam erat 
            volutpat. Curabitur eget arcu turpis. Ut vitae consectetur turpis. Pellentesque habitant morbi 
            tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vehicula finibus 
            turpis. Maecenas suscipit et eros nec suscipit. Mauris placerat enim et ligula vulputate, at 
            varius ligula condimentum. Integer volutpat tincidunt tincidunt. Integer molestie, metus at 
            eleifend fringilla, odio orci ultrices ligula, in rhoncus metus metus vitae metus. Quisque 
            volutpat laoreet tempus. Cras tincidunt mattis elit, nec scelerisque ipsum placerat eget. 
            Praesent dapibus velit vestibulum neque euismod ultrices. Mauris tellus sapien, feugiat quis 
            consectetur vel, convallis nec nisi. Curabitur vel blandit nulla. </p>
         </div>
      );
   }
}


export default class DocsPage extends React.Component {

   public componentDidMount() {
      // var spy = new ScrollSpy('#js-scrollspy', {
      //    nav: '.scrollNav > ul > li > a',
      //    className: 'is-inview'
      // });
   }

   public timeStampSince():string {
      let aDay = 24*60*60*1000;
      let toDay= new Date().getTime();
      return CLOCK.Since((toDay-aDay));
   }

   public render() {
      return (
         <div className="content--lg">

            <h2>samplecontent</h2>

            <p>template content for demonstrating scrollspy functionality</p>

            <h3 className="timesince">{this.timeStampSince()}</h3>

            <SearchInput id="filterField" label="Seach for..."/>

            <div className="scrollspy">
               <ScrollContent />
               <ScrollNav />
            </div>
            
         </div>
      );
   }
}

class SearchInput extends Input {

   public markContext:Mark;

   public componentDidMount() {
      this.context = document.querySelectorAll(".cont");
      this.markContext = new Mark(this.context);
   }

   public onChange(event:any){
      this.setState({
         value: event.target.value
      });

      let lookfor:string = (event.target.value).toUpperCase();

      //{ "debug": true, "log": window.console} as second parameter to debug mark.js
      this.markContext.unmark();
      this.markContext.mark(lookfor);

      console.log("I'm filtering out results without... [ " + lookfor + " ]");

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < document.querySelectorAll(".cont").length; i++) {
         let lookFrom:any = document.querySelectorAll(".cont")[i];
         if (lookFrom.innerHTML.toUpperCase().indexOf(lookfor) > -1) {
            lookFrom.style.display = "block";
         } else {
            lookFrom.style.display = "none";
         }
      }

   }

}
