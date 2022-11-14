import React, { useState } from "react";
import "../styles/settings.css";
import "../styles/new-bien.css";
import { capitalizeEveryWord } from "../utils/stringFormat";

const conditionalPrinting = (data, kvObject, defaultText="") => {
  const allKeys = Object.keys(kvObject);
  return allKeys.some(el => el == data) ? kvObject[String(data)] : defaultText;
}

const NewBien = (props) => {

 const { biens } = props;
 const typesDeBiens = [...new Set(biens.map(b => b["typeofgood"]["name"] || "Autre"))];

 const [step, setStep] = useState(1);
 const [bienData, setBienData] = useState({})
 const [allBiensDeType, setAllBiensDeType] = useState(biens.filter(b => b["typeofgood"]["name"] === "appartement"));
 const [caracsAttendues, setCaracsAttendues] = useState([]);

 const handleSelectTypeDeBien = (e) => {
    const typeDeBien = e.target.value;
    const bdt = biens.filter(b => b["typeofgood"]["name"] === typeDeBien);
    setAllBiensDeType(bdt);

    console.log(bdt);
    let uniqueCaracsNames = [...new Set(bdt.map(b => b["caracteristics"]["name"]))];

    const expectedCaracs = uniqueCaracsNames.map(cn => {
      const allWithCarac = bdt.filter(b => b["caracteristics"]["name"] === cn);
      const lastWithCarac = allWithCarac[allWithCarac.length - 1]["caracteristics"];
      return lastWithCarac.map(c => {
        return {
          name: c.name,
          slug: c.slug,
          format: c.format,
          required: c.required === 0
        }
      })
      .filter(el => ["superficie", "adresse"].every(ex => ex !== el.name));
    });

    console.log(expectedCaracs);
    setCaracsAttendues(expectedCaracs);
 }

 const handleFormButtonClick = (e) => {
      e.preventDefault();
      if(step === 1)
      {
        setStep(step + 1);
      } 
 }


  return (
    <div className="settings">
      <div className="settings__wrapper">

        <div className="details__form">
          <h2 className="profile__title">Enregistrer un nouveau bien</h2>
          
          <div className="profile__desc">
            <p>{
              conditionalPrinting(step, {"1": "Étape 1/2: Informations de base", 
                                         "2": "Étape 2/2: Caractéristiques du bien"
                                        }, 
                                  "Veuillez remplir les informations ci-dessous")
              }</p>
          </div>

          <form>
            {
              step === 1 && (
                <>
                <div className="form__group">
                <div>
                  <label>Intitulé du bien</label>
                  <input type="text" placeholder="Appartements Johnson" required />
                </div>
  
                <div>
                  <label>Description</label>
                  <textarea rows="2" placeholder="Petit appartement chic" required>
                    </textarea>
                </div>
              </div>
  
              <div className="form__group">
                <div>
                  <label>Type de bien</label>
                  <select defaultValue="appartement"
                    onChange={handleSelectTypeDeBien}>

                    <option value="appartement">Appartement</option>
                    <option value="bureau">Bureau</option>
                    <option value="chambre">Chambre</option>
                    <option value="commerce">Commerce</option>
                    <option value="immeuble">Immeuble</option>
                    <option value="magasin">Magasin</option>
                    <option value="entrepôt">Entrepôt</option>
                    <option value="maison">Maison d'habitation</option>
                    <option value="studio">Studio</option>
                  </select>
                </div>
  
                <div>
                  <label>Localité</label>
                  <input type="text" placeholder="Douala" required />
                </div>
  
                <div>
                  <label>Adresse / Quartier</label>
                  <input type="text" placeholder="Carrefour Logpom" required />
                </div>
              </div>
  
              <div className="form__group">
                <div>
                  <label>Type de contrat</label>
                  <select defaultValue="location">
                    <option value="location">À Louer</option>
                    <option value="vente">À Vendre</option>
                  </select>
                </div>
  
                <div>
                  <label>Superficie (m²)</label>
                  <input type="number" placeholder="300" step="5" required />
                </div>
  
                <div>
                  <label>Prix (F CFA)</label>
                  <input type="number" placeholder="100000" step="5000" required />
                </div>
              </div>
  
                </>
              )
            }

            {
              step === 2 && (
                <>

                {
                  caracsAttendues.length == 0 && (
                    <div className="form__group">
                        <p> Aucune caractéristique n'a été trouvée pour ce type de bien. Bien vouloir contacter l'administrateur. </p>
                    </div>
                  )
                }
                {/* {
                  caracsAttendues.length > 0 && (
                    caracsAttendues.map((carac, index) => (
                      <div className="form__group" key={index}>
                        <div>
                          <label>{capitalizeEveryWord(carac.name)}</label>
                          { carac.required && (
                               { (carac.format === "Numerique") && (<input type="number" placeholder="" required />)}
                               { (carac.format === "String") && (<input type="text" placeholder="" required />)}
                          )
                          }

                          { !carac.required && 
                               { (carac.format === "Numerique") && (<input type="number" placeholder="" />)}
                               { (carac.format === "String") && (<input type="text" placeholder="" />)}
                          }
                          </div>
                      </div>     
                    )
                 ) 
                  )
                } */}
                
                </>
              )
            }

              <br />
                <div className="profile__img-btns">
                  {step == 2 && (
                      <button className="dlt__btn" 
                              onClick={() => { setStep(step - 1)}}>Retour</button>
                    )
                  }
                  <button className="update__btn"
                          onClick={handleFormButtonClick}>
                    {
                      conditionalPrinting(step, {"1": "Poursuivre", 
                                           "2": "Enregistrer"
                                          }, 
                                    "Poursuivre")
                    }
                </button>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBien;
