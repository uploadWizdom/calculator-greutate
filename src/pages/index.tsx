import * as React from "react";
import { ImageTextCard } from "../components/Index/ImageTextCard/ImageTextCard";
import { ImcCalculator } from "../components/Index/ImcCalculator/ImcCalculator";
import { Layout } from "../components/Layout/Layout";

const style = require("./index.module.scss");

const cardsData = [
  [
    require("../images/subponderabilitate.png").default,
    `SUBponderabilitatea apare atunci când greutatea sau un indicele de masa
      corporala au valori sub percentila 5. Opusa obezitatii, starea de
      subponderabilitate are și ea riscurile și efectele ei negative asupra
      cresterii armonioase a copiilor. Raportat la majoritatea copiilor sanatosi
      de acelasi sex si varsta, mai putin de 5% dintre acestia au avut
      indicatorul analizat sub aceasta limita.`,
  ],
  [
    require("../images/greutatenormala.png").default,
    `GREUTATEA normală este stadiul de greutate in care se incadreaza cei mai
      multi copii sanatosi de acelasi sex si varsta. Acest interval se situeaza
      intre percentilele 5 si 85. Greutatea normala nu este o valoarea fixa
      pentru un copil de o anumita varsta, ci un interval in care se incadreaza
      copii de aceeasi varsta, cu diferite greutati si inaltimi, fara sa
      depaseasca anumite limite inferioare si superioare prestabilite pentru
      fiecare parametru.`,
  ],
  [
    require("../images/1920x1080_5.jpg").default,

    `SUPRAponderabilitate apare atunci când greutatea sau indicele de masa
      corporala au valori peste percentila 85. Termenul "supraponderabilitate"
      face referire la copiii care au o greutate corporală mai ridicata decat
      greutatea normală, dar care inca nu sufera de obezitate. Raportat la
      majoritatea copiilor sanatosi de acelasi sex si varsta, doar 15% dintre
      acestia au avut greutatea mai mare.`,
  ],
  [
    require("../images/obezitate.png").default,

    `OBEZITATEA este un diagnostic pe care medicul specialist îl ia în
      considerare atunci când greutatea sau indicele de masa corporala ating
      valori peste percentila 95. Obezitatea din copilarie este asociata cu
      numeroase riscuri asupra sanatatii si calitatii vietii. De aceea este
      foarte importanta identificarea din timp a obezitatii si inlaturarea ei
      cat mai repede cu putinta. Raportat la majoritatea copiilor sanatosi de
      acelasi sex si varsta, 5% dintre acestia au avut greutatea mai mare.`,
  ],
  [
    require("../images/obezitatesevera.png").default,

    `OBEZITATEA SEVERĂ este menționată atunci când valorile care indică
      greutatea sau indicele de masa corporala depășesc percentila 99. Este cel
      mai avansat și grav stadiu al obezității infantile, cu repercusiuni
      serioase asupra sănătății fizice, dar și emiționale ale copiilor care
      suferă de această afecțiune. Raportat la majoritatea copiilor sanatosi de
      acelasi sex si varsta, doar 1% dintre acestia au avut greutatea mai mare.`,
  ],
];

const IndexPage = () => {
  return (
    <Layout>
      <div className={style.container}>
        <ImcCalculator />

        <div className={style.whatIsImc}>
          <h1 className={style.heading}>CE ESTE INDICELE DE MASA CORPORALA?</h1>

          <h3 className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
