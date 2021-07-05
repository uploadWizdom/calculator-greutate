import * as React from "react";
import { ImageTextCard } from "../components/Index/ImageTextCard/ImageTextCard";
import { ImcCalculator } from "../components/Index/ImcCalculator/ImcCalculator";
import { Layout } from "../components/Layout/Layout";

const style = require("./index.module.scss");

const cardsData = [
  [
    require("../images/25.png").default,
    <>
      <strong>Subponderea</strong> apare atunci când greutatea sau indicele de
      masă corporală au valori sub percentila 5. Opusă obezității, subponderea
      are și ea riscurile și efectele ei negative asupra creșterii armonioase a
      copiilor. Raportat la majoritatea copiilor sănătoși de același sex și
      aceeași vârstă, mai puțin de 5% dintre aceștia au avut indicatorul
      analizat sub această limită.
    </>,
  ],
  [
    require("../images/24.png").default,
    <>
      <strong>Greutatea normală</strong> este stadiul de greutate în care se
      încadrează cei mai mulți copii sănătoși de același sex și aceeași vârstă.
      Acest interval se situează între percentilele 5 și 85. Greutatea normală
      nu este o valoare fixă pentru un copil de o anumită vârstă, ci un interval
      în care se încadrează copii de aceeași vârstă, cu diferite greutăți și
      înălțimi, fără să depășească anumite limite inferioare și superioare
      prestabilite pentru fiecare parametru.
    </>,
  ],
  [
    require("../images/23.png").default,

    <>
      <strong>Supraponderea</strong> apare atunci când greutatea sau indicele de
      masă corporală au valori peste percentila 85. Termenul "suprapondere" face
      referire la copiii care au o greutate corporală mai ridicată decât
      greutatea normală, dar care încă nu suferă de obezitate. Raportat la
      majoritatea copiilor sănătoși de același sex și aceeași vârstă, doar 15%
      dintre aceștia au avut greutatea mai mare.
    </>,
  ],
  [
    require("../images/22.png").default,

    <>
      <strong>Obezitatea</strong> este un diagnostic pe care medicul specialist
      îl ia în considerare atunci când greutatea sau indicele de masă corporală
      ating valori peste percentila 95. Obezitatea din copilărie este asociată
      cu numeroase riscuri asupra sănătății și calității vieții. De aceea este
      foarte importantă identificarea din timp a obezității și înlăturarea ei
      cât mai repede cu putință. Raportat la majoritatea copiilor sănătoși de
      același sex și aceeași vârstă, 5% dintre aceștia au avut greutatea mai
      mare.
    </>,
  ],
  [
    require("../images/21.png").default,

    <>
      <strong>Obezitatea severă</strong> este menționată atunci când valorile
      care indică greutatea sau indicele de masă corporală depășesc percentila
      99. Este cel mai avansat și grav stadiu al obezității infantile, cu
      repercusiuni serioase asupra sănătății fizice, dar și emoționale ale
      copiilor care suferă de această afecțiune. Raportat la majoritatea
      copiilor sănătoși de același sex și vârstă, doar 1% dintre aceștia au avut
      greutatea mai mare.
    </>,
  ],
];

const IndexPage = () => {
  return (
    <Layout>
      <div className={style.container}>
        <ImcCalculator />

        <div className={style.whatIsImc}>
          <h1 className={style.heading}>CE ESTE INDICELE DE MASĂ CORPORALĂ?</h1>

          <h3 className={style.text}>
            <strong>Indicele de masă corporală</strong> sau <strong>IMC</strong>
            , cunoscut sub numele de Indicele Quetelet, reprezintă un indicator
            stabilit de <strong>Organizația Mondială a Sănătății</strong> pentru
            a determina starea de sănătate a unei persoane în funcție de grupa
            sau categoria de greutate în care se încadrează.
          </h3>
        </div>

        <div className={style.cards}>
          {cardsData.map(([imageUrl, text], index) => (
            <ImageTextCard
              key={index}
              imageUrl={imageUrl}
              text={text}
              isSwitched={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
