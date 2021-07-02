import React, { FunctionComponent } from "react";

const style = require("./resultModal.module.scss");

interface IResultModalProps {
  bmiCalculatedObj: any;
}

const ImgBlock: FunctionComponent<
  { fileName: string } & React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = ({ fileName, ...rest }) => {
  return (
    <img
      src={require(`../../../../images/imc/${fileName}.gif`).default}
      {...rest}
    />
  );
};

export const ResultModal: FunctionComponent<IResultModalProps> = ({
  bmiCalculatedObj,
}) => {
  return (
    <div className={style.container}>
      {/* <div className={style.result}>
        Based on the height and weight entered, the{" "}
        <strong>BMI is {bmiCalculatedObj.bmi}</strong>, placing the BMI-for-age{" "}
        <strong>at {getPercentile(bmiCalculatedObj.z_perc)} percentile</strong>{" "}
        for boys aged 7 years. This child{" "}
        <strong>{getBMIConclusion(bmiCalculatedObj.z_perc)}</strong>
        {getBMI_text(bmiCalculatedObj.z_perc, bmiCalculatedObj.gender)}.
      </div> */}

      <div className={style.middle}>
        <p>SEMAFORUL GREUTĂȚII</p>

        <div className={style.bar}>
          <span style={{ width: "5%" }}></span>
          <span style={{ width: "80%" }}></span>
          <span style={{ width: "10%" }}></span>
          <span style={{ width: "5%" }}></span>
        </div>

        <ImgBlock fileName="2_healthy" className={style.mainImg} />

        <ul className={style.list}>
          <li>
            <ImgBlock fileName="1_underweight_block" /> Subponderal , sub
            percentila 5
          </li>
          <li>
            <ImgBlock fileName="2_healthy_block" /> Greutate normală, între
            percentila 5 și percentila 85
          </li>
          <li>
            <ImgBlock fileName="3_overweight_block" /> Supraponderal , între
            percentila 85 și percentila 95
          </li>
          <li>
            <ImgBlock fileName="4_obese_block" /> Obez, egal sau mai mare decât
            percentila 95
          </li>
        </ul>
      </div>

      <div className={style.desc}>
        {getDescription(bmiCalculatedObj.z_perc)}

        <p>
          <strong>
            De reținut! Menținerea unei greutăți sănătoase pe tot parcursul
            copilăriei și al adolescenței poate reduce riscul de a deveni
            supraponderal sau obez ca adult.
          </strong>
        </p>

        <p>
          <strong>Ce ar trebui să faceți?</strong>
        </p>
        <p>
          Indiferent de grupa de greutate actuală, ajutați-vă copilul să
          dezvolte obiceiuri sănătoase pentru a-și păstra o greutate normală și
          discutați cu medicul pediatru sau cu medicul de familie orice
          întrebare aveți referitoare la sănătatea copilului. Orice modificare
          bruscă și semnificativă (creștere sau scădere) a greutății copilului
          trebuie discutată cu medicul!
        </p>

        <p>
          Și nu uitați de <strong>regulile și obiceiurile sănătoase</strong> de
          care ar trebuie să țină seama toți copiii:
        </p>

        <ul>
          <li>
            Consumați <strong>alimente și băuturi sănătoase!</strong>
          </li>
          <li>
            Faceți zilnic <strong>mișcare</strong>! Orice formă de activitate
            fizică aduce numai beneficii organismului
          </li>
          <li>
            Stabiliți o rutină zilnică pentru a reuși să aveți un{" "}
            <strong>somn adecvat</strong>!
          </li>
          <li>
            Limitați <strong>timpul petrecut în fața ecranelor</strong>!
          </li>
        </ul>

        <p>
          Pentru mai multe informații și sfaturi, consultați{" "}
          <strong>
            GHIDUL OBEZITĂȚII INFANTILE – Recomandări pentru părinți! (link
            către download).
          </strong>
        </p>

        <p>
          <strong>Țineți evidența IMC!</strong>
        </p>
        <p>
          Verificați IMC-ul copilului anual sau mai des dacă este recomandat de
          medicul pediatru acest lucru. Urmărirea graficelor de creștere vă
          poate asigura de sănătatea copilului dumneavoastră prin menținerea
          unei greutăți normale. Un singur calcul IMC nu este suficient pentru a
          evalua starea greutății pe termen lung, deoarece înălțimea și
          greutatea se schimbă odată cu creșterea.
        </p>
        <p className={style.italic}>
          <strong>
            Vă rugăm să rețineți că acest calculator IMC nu este destinat să
            servească drept sursă de diagnostic și nu este destinat să
            înlocuiască sfatul medical profesionist. Deoarece IMC se bazează pe
            greutate și înălțime, acesta este doar un indicator al grăsimii
            corporale. Persoanele cu același IMC pot avea cantități diferite de
            grăsime corporală, de aceea este recomandat și un consult de
            specialitate periodic, in cazul unor valori anormale!
          </strong>
        </p>
      </div>
    </div>
  );
};

function getDescription(perc) {
  if (perc < 5) {
    return (
      <>
        <p>
          Vă mulțumim pentru că ați utilizat aplicația noastră! Bazându-ne pe
          înălțimea și greutatea introduse în chestionar, aplicația a făcut un
          calcul ce dovedește că al dumneavoastră copil se află sub limita
          greutății recomandate și este încadrat la grupa de greutate -{" "}
          <strong>SUBPONDERAL</strong>.
        </p>
        <p>Ce înseamnă asta?</p>
        <p>
          Indicele de masă corporală (IMC) este calculat folosind greutatea și
          înălțimea copilului dumneavoastră și este apoi utilizat pentru a
          stabili grupa de greutate în care se încadrează o persoană. IMC are
          particularități de interpretare corespunzătoare vârstei și sexului
          copilului supus analizei. Percentila IMC arată cum se compară
          greutatea copilului dumneavoastră cu cea a altor copii având aceeași
          vârstă și același sex.
        </p>
        <p>
          Bazându-ne pe înălțimea și greutatea introduse în chestionar, copilul
          dumneavoastră se află sub limita greutății recomandate și este
          încadrat la grupa de greutate – <strong>SUBPONDERAL</strong>. Vă
          recomandăm un consult la medicul pediatru și/sau la medicul
          endocrinolog și/sau la medicul de nutriție și boli metabolice, pentru
          o evaluare completă destinata identificării cauzelor posibile ale
          acestei situații.
        </p>
      </>
    );
  } else if (perc >= 5 && perc < 85) {
    return (
      <>
        <p>
          Vă mulțumim pentru că ați utilizat aplicația noastră! Bazându-ne pe
          înălțimea și greutatea introduse în chestionar, aplicația a făcut un
          calcul ce dovedește că al dumneavoastră copil este în prezent foarte
          bine și este încadrat la grupa de greutate{" "}
          <strong>NORMOPONDERAL/ GREUTATE NORMALĂ</strong>.
        </p>
        <p>Ce înseamnă asta?</p>
        <p>
          Indicele de masă corporală (IMC) este calculat folosind greutatea și
          înălțimea copilului dumneavoastră și este apoi utilizat pentru a
          stabili grupa de greutate în care se încadrează o persoană. IMC are
          particularități de interpretare corespunzătoare vârstei și sexului
          copilului supus analizei. Percentila IMC arată cum se compară
          greutatea copilului dumneavoastră cu cea a altor copii având aceeași
          vârstă și același sex.
        </p>
        <p>
          Bazându-ne pe înălțimea și greutatea introduse în chestionar, copilul
          dumneavoastră este în prezent foarte bine și este încadrat la grupa de
          greutate <strong>NORMOPONDERAL/ GREUTATE NORMALĂ</strong>. Menținerea
          unei greutăți normale pe tot parcursul copilăriei și al adolescenței
          poate reduce riscul de a deveni supraponderal sau obez ca adult și
          trebuie să fie un obiectiv pentru sănătate!
        </p>
      </>
    );
  } else if (perc >= 85 && perc < 95) {
    return (
      <>
        <p>
          Vă mulțumim pentru că ați utilizat aplicația noastră! Bazându-ne pe
          înălțimea și greutatea introduse în chestionar, aplicația a făcut un
          calcul ce dovedește că al dumneavoastră copil se află peste limita
          greutății recomandate și este încadrat la grupa de greutate
          <strong>SUPRAPONDERAL</strong>.
        </p>
        <p>
          <strong>Ce înseamnă asta?</strong>
        </p>
        <p>
          Indicele de masă corporală (IMC) este calculat folosind greutatea și
          înălțimea copilului dumneavoastră și este apoi utilizat pentru a
          stabili grupa de greutate în care se încadrează o persoană. IMC are
          particularități de interpretare corespunzătoare vârstei și sexului
          copilului supus analizei. Percentila IMC arată cum se compară
          greutatea copilului dumneavoastră cu cea a altor copii având aceeași
          vârstă și același sex.
        </p>
        <p>
          Bazându-ne pe înălțimea și greutatea introduse în chestionar, copilul
          dumneavoastră se află peste limita greutății recomandate și este
          încadrat la grupa de greutate <strong>SUPRAPONDERAL</strong>. Deși în
          prezent copilul nu suferă de obezitate, el are potențialul de a se
          încadra în categoria obezitate, deci este important să preveniți
          creșterea în greutate în exces. Copiii și adolescenții NU ar trebui să
          urmeze o dietă de reducere a greutății fără consultarea unui medic
          specialist! Vă recomandăm consult la medicul pediatru și/sau la
          medicul specialist endocrinolog și/ sau la medicul de nutriție, diabet
          și boli metabolice pentru cele mai bune sfaturi.
        </p>
      </>
    );
  } else {
    return (
      <>
        <p>
          Vă mulțumim pentru că ați utilizat aplicația noastră! Bazându-ne pe
          înălțimea și greutatea introduse în chestionar, aplicația a făcut un
          calcul ce dovedește că al dumneavoastră copil se află peste limita
          greutății recomandate și este încadrat la grupa de greutate{" "}
          <strong>OBEZITATE</strong>!
        </p>
        <p>
          <strong>Ce înseamnă asta?</strong>
        </p>
        <p>
          Indicele de masă corporală (IMC) este calculat folosind greutatea și
          înălțimea copilului dumneavoastră și este apoi utilizat pentru a
          stabili grupa de greutate în care se încadrează o persoană. IMC are
          particularități de interpretare corespunzătoare vârstei și sexului
          copilului supus analizei. Percentila IMC arată cum se compară
          greutatea copilului dumneavoastră cu cea a altor copii având aceeași
          vârstă și același sex.
        </p>
        <p>
          Bazându-ne pe înălțimea și greutatea introduse în chestionar, copilul
          dumneavoastră se află peste limita greutății recomandate și este
          încadrat la grupa de greutate <strong>OBEZITATE</strong> și poate avea
          probleme de sănătate legate de greutate, dar și afecțiuni medicale
          conexe acestei patologii. Vă recomandăm consult la medicul pediatru
          și/sau la medicul specialist endocrinolog/ la medicul de nutriție,
          diabet și boli metabolice pentru cele mai bune sfaturi și un plan de
          tratament adecvat!
        </p>
      </>
    );
  }
}
