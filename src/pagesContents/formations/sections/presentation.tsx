import { H2, Para } from "../../../components";

export const FormationPresentation = () => {
  return (
    <section className="container flex flex-col items-center max-w-4xl mx-auto text-center separed-sections">
      <H2>Les entreprises et les écoles</H2>
      <Para>
        Vous êtes une école ou une entreprise qui souhaite former des
        développeurs qualifiés. Pour cela, vous avez besoin d'un développeur
        disposant d'une bonne pédagogie d'enseignement.
      </Para>

      <Para>
        Vous avez besoin de plus qu'un développeur, il vous faut un
        formateur/mentor. Quelqu'un qui pourra leur indiquer précisément ce
        qu'il faut apprendre, pourquoi il est important de l'apprendre et
        comment le maîtriser avec efficacité.
      </Para>

      <Para>
        Si tout ceci vous parle alors vous êtes tombé sur la bonne personne.
        Pendant mon parcours dans l'apprentissage du développement web, j'ai
        commis énormément d'erreurs qui ont considérablement rallongé ma période
        d'apprentissage. Nous pouvons éviter ceci pour vos futurs développeurs.
      </Para>

      <Para>
        Je mets à votre disposition 4 modules de formation complémentaires, vous
        pouvez sélectionner uniquement ceux qui sont pertinents pour vous
        apprenant.
      </Para>
    </section>
  );
};
