import React, { useState } from "react";
import "../styles/settings.css";
import "../styles/new-bien.css";
import { capitalizeEveryWord } from "../utils/stringFormat";

const conditionalPrinting = (data, kvObject, defaultText="") => {
  const allKeys = Object.keys(kvObject);
  return allKeys.some(el => el == data) ? kvObject[String(data)] : defaultText;
}

const DEFAULT_CARACS = [
{
    "name": "adresse",
    "slug": "adresse",
    "format": "String",
    "required": 0
},
{
  "name": "superficie",
  "slug": "superficie",
  "format": "Numerique",
  "required": 0
},
{
  "name": "nombre de chambres",
  "slug": "nombre_de_chambres",
  "format": "Numerique",
  "required": 0
},
{
  "name": "nombre de salon",
  "slug": "nombre_de_salon",
  "format": "Numerique",
  "required": 0
},
{
  "name": "nombre de cuisine",
  "slug": "nombre_de_cuisine",
  "format": "Numerique",
  "required": 0
},
{
  "name": "nombre de douche",
  "slug": "nombre_de_douche",
  "format": "Numerique",
  "required": 0
}];

const DEFAULT_CARACS_ATTENDUES = DEFAULT_CARACS.filter(el => ["superficie", "adresse"].every(ex => ex !== el.name));

const NewBien = (props) => {

 const { biens } = props;
 const typesDeBiens = [...new Set(biens.map(b => b["typeofgood"]["name"] || "Autre"))];

 const [step, setStep] = useState(1);
 const [bienData, setBienData] = useState({vente: 0, typeofgood: {name: "appartement"}, caracteristics: []});
 const [allBiensDeType, setAllBiensDeType] = useState(biens.filter(b => b["typeofgood"]["name"] === "appartement"));
 const [caracsAttendues, setCaracsAttendues] = useState(DEFAULT_CARACS_ATTENDUES);


 const setObjectProperties = (obj, propsWithDotNotation, value) => {
    if(!propsWithDotNotation.includes(".")) return {...obj, [propsWithDotNotation]: value};
    const props = propsWithDotNotation.split(".");
    const firstProp = props[0];
    const restProps = props.slice(1).join(".");
    const newObj = {...obj, [firstProp]: setObjectProperties(obj[firstProp] || {}, restProps, value)};
    return newObj;
  }

 const handleFormButtonClick = (e) => {
      e.preventDefault();
      if(step === 1)
      {
        setStep(step + 1);
      } 
 }

 const handleFormInputChange = (e, field) => {
    const val = e.target.value;
    setBienData(setObjectProperties(bienData, field, val));
    console.log(bienData);
 };

 const handleSelectTypeDeBien = (e) => {
  const typeDeBien = e.target.value;
  const bdt = biens.filter(b => b["typeofgood"]["name"] === typeDeBien);
  setAllBiensDeType(bdt);
  setBienData(setObjectProperties(bienData, "typeofgood.name", typeDeBien));
  console.log(bienData);
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
  setCaracsAttendues(expectedCaracs[0] || []);
}

const handleSelectTypeContrat = (e) => {
  let typeContrat = e.target.value;
  console.log(typeContrat);
  typeContrat = typeContrat === "location" ? 0 : 1;
  setBienData(setObjectProperties(bienData, "vente", typeContrat));
}

const handleUpdateCarac = (e, carac) => {
  const val = e.target.value;
  let actualCaracs = bienData["caracteristics"] || [];
  const thisCaracObj = DEFAULT_CARACS.find(c => c.slug === carac);
  if(!thisCaracObj) return;
  const thisObjVal = setObjectProperties(thisCaracObj, "pivot.value", val);
  actualCaracs = actualCaracs.filter(c => c.slug !== carac);
  actualCaracs.push(thisObjVal);
  const thisFormat = thisObjVal.format;
  if(thisFormat === "Numerique")
    setBienData(setObjectProperties(bienData, "caracteristics", Number(actualCaracs)));
  else
    setBienData(setObjectProperties(bienData, "caracteristics", actualCaracs));

  console.log(bienData.caracteristics);
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
                  <input type="text" 
                         placeholder="Appartements Johnson" 
                         onChange={(e) => handleFormInputChange(e, "name")}
                         value={bienData.name || ""}
                         required />
                </div>
  
                <div>
                  <label>Description</label>
                  <textarea rows="2" 
                            placeholder="Petit appartement chic"
                            onChange={(e) => handleFormInputChange(e, "description")}
                            value={bienData.description || ""}
                            required>
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
                  <input type="text"
                        placeholder="Douala"
                        onChange={(e) => handleFormInputChange(e, "zone.name")}
                        value={bienData?.zone?.name || ""}
                        required />
                </div>
  
                <div>
                  <label>Adresse / Quartier</label>
                  <input type="text" 
                         placeholder="Carrefour Logpom"
                         value={(bienData || []).caracteristics?.find(c => c.slug === "adresse")?.pivot.value || ""}
                         onChange={(e) => handleUpdateCarac(e, "adresse")}
                         required />
                </div>
              </div>
  
              <div className="form__group">
                <div>
                  <label>Type de contrat</label>
                  <select defaultValue="location" 
                          onChange={handleSelectTypeContrat}>
                    <option value="location">À Louer</option>
                    <option value="vente">À Vendre</option>
                  </select>
                </div>
  
                <div>
                  <label>Superficie (m²)</label>
                  <input type="number"
                          placeholder="300" 
                          step="5"
                          value={((bienData.caracteristics || []) || []).find(c => c.slug === "superficie")?.pivot.value || "0"}
                          onChange={(e) => handleUpdateCarac(e, "superficie")}
                          required />
                </div>
  
                <div>
                  <label>Prix (F CFA)</label>
                  <input type="number"
                         placeholder=""
                         step="1000"
                         min="5000"
                         value={bienData.price || "5000"}
                         onChange={(e) => handleFormInputChange(e, "price")} 
                         required />
                </div>
              </div>
              </>
              )
            }

            {
              step === 2 && (
                <>
                <div className="carac-step">
                {
                  caracsAttendues.length === 0 ? (
                    <div className="form__group white-text no-carac">
                        <p className="centered-text"> Aucune caractéristique n'a été trouvée pour ce type de bien. Veuillez contacter l'administrateur. </p>
                    </div>
                  )
                  : ( caracsAttendues.map((carac, index) => (
                    <div className="form__group" key={index}>
                        <div>
                        <label>{capitalizeEveryWord(carac.name).replace("Nombre De Cuisine", "Nombre De Cuisines")
                                                               .replace("Nombre De Salon", "Nombre De Salons")
                                                               .replace("Nombre De Douche", "Nombre De Douches")}
                        </label>
                        { carac.required ? (
                             carac.format === "Numerique" ? 
                                (<input type="number" 
                                        name={carac.slug} 
                                        value={bienData.caracteristics?.find(c => c.slug === carac.slug)?.pivot.value || 1}
                                        onChange={(e) => handleUpdateCarac(e, (carac.slug || ""))}
                                        required />) 
                              : (<input type="text"
                                        name={carac.slug}
                                        value={bienData.caracteristics?.find(c => c.slug === carac.slug)?.pivot.value || ""}
                                        onChange={(e) => handleUpdateCarac(e, (carac.slug || ""))}
                                        required />)
                          ) : (
                            carac.format === "Numerique" ? 
                                (<input type="number"
                                        name={carac.slug}
                                        value={bienData.caracteristics?.find(c => c.slug === carac.slug)?.pivot.value || 1}
                                        onChange={(e) => handleUpdateCarac(e, (carac.slug || ""))}
                                  />) 
                              : (<input type="text" 
                                        name={carac.slug}
                                        value={bienData.caracteristics?.find(c => c.slug === carac.slug)?.pivot.value || ""}
                                        placeholder=""
                                        onChange={(e) => handleUpdateCarac(e, (carac.slug || ""))}
                                />)
                            )
                        }
                        </div>
                    </div>     
                  )
                  ))
                }
                </div>
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
