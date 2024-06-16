import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import React, { useState ,useMemo } from 'react';
import { Person } from '../models/person.model';
import EmployeeItem from '../components/EmployeeItem';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonSelect, IonList, IonInput, IonButton, IonItem, IonLabel,
  IonBadge, IonSelectOption, IonText, IonDatetimeButton, IonModal, IonDatetime,
  IonIcon
} from '@ionic/react';
import { useHistory, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomDataTable from '../components/DataTable';


const Tab14: React.FC = () => {
  const params = useParams();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState('');
  const [tipovisita, settipovisita] = useState('');
  const [motivovisita, setmotivovisita] = useState('');
  const [bomberos, setbomberos] = useState('');


  const data = [
    { id: 1, title: 'Star Wars', year: 'LA FAMILIA CONTINÚA EN LA VIVIENDA AFECTADA ',year1: '1977',year2: '1977',year3: '1977' },
    { id: 2, title: 'Conan the Barbarian', year: 'UBICACION DE LA FAMILIA POSTERIOR A LA ATENCION SOCIAL',year1: '1977',year2: '1977',year3: '1977' },
    { id: 3, title: 'The Lord of the Rings', year: ' LA FAMILIA SE UBICA EN OTRO LUGAR DISTINTO A LOS RELACIONADOS ANTERIORMENTE ',year1: '1977',year2: '1977',year3: '1977' }
  ];
  
  const columns = [
    {
        name: 'Eliminar',
        selector: row => <><button className='btn btn-info btn-sm text-light' >eliminar</button>
                          <button className='btn btn-info btn-sm text-light m-1' >ver</button>
                          <button className='btn btn-info btn-sm text-light m-1' >Agregar</button></> ,

    },
    {
        name: 'UBICACION DE LA FAMILIA POSTERIOR A LA ATENCION SOCIAL',
        selector: row =>row.year,
        sortable: true,
        minWidth: 1,
        style: {
          
        }
        
    }
    
  ];

  // Manejador para cambios en el campo de búsqueda
  const handleFilterChange = (event) => {
      setFilterText(event.target.value);
  };




  const tipovisitafun = (event) => {
    settipovisita(event.target.value);

  };

  const motivovisitafun = (event) => {
    setmotivovisita(event.target.value);

  };

  const bomberosfun = (event) => {
    setbomberos(event.target.value);

  };

  function enviar() {
    console.log(motivovisita)
    console.log(tipovisita)
    console.log(bomberos)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle slot="start">15 - UBICACION DE LA FAMILIA </IonTitle>
          <IonTitle slot="end">FICHA SOCIAL: <label style={{ color: '#17a2b8' }}>{params.ficha}</label> </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className="social-card">
      <span className="label">Ficha social:</span>
      <span className="value">{params.ficha}</span>
    </div>

        <div className=' shadow p-3 mb-5 bg-white rounded'>
          <IonList>
            <div className="alert alert-primary" role="alert">
              <span className="badge badge-secondary text-dark">15 - UBICACION DE LA FAMILIA POSTERIOR A LA ATENCION SOCIAL</span>
            </div>
            <div className="row g-3 was-validated ">
              <div className="col-sm">
                <label className="form-label">Cual es la ubicacion de la familia posterior a la atencion social:</label>
                <select value={motivovisita} onChange={motivovisitafun} className="form-control form-control-sm" id="pregunta2_3" aria-describedby="validationServer04Feedback" required>
                <option value=""> SELECCIONE </option><option value="7"> LA FAMILIA CONTINÚA EN LA VIVIENDA AFECTADA </option><option value="1"> LA FAMILIA SE TRASLADA A ALBERGUE TEMPORAL </option><option value="3"> LA FAMILIA SE TRASLADA A AUTO ALBERGE </option><option value="2"> LA FAMILIA SE TRASLADA A AUXILIO HABITACIONAL </option><option value="4"> LA FAMILIA SE TRASLADA A PAGAR ARRENDAMIENTO POR CUENTA PROPIA </option><option value="5"> LA FAMILIA SE TRASLADA A VIVIENDA PRESTADA </option><option value="6"> LA FAMILIA SE UBICA EN OTRO LUGAR DISTINTO A LOS RELACIONADOS ANTERIORMENTE </option>
               </select>
              </div>
            <div className="col-sm">
              <blockquote className="blockquote text-center">
                    <p className="mb-0">
                    </p><h6>Numero de Ubicaciones:</h6>
                    <p></p>
                    <p className="mb-0">
                    </p><h5 id="numerointegrantes">1</h5>
                    <p></p>
                </blockquote>
              </div>

            </div>
          </IonList>
          <IonList>
  
            <div className="row g-3 was-validated ">
            <div className="col-sm-12">
                <label className="form-label" >Cual:</label>
                <input type="text" placeholder="" className="form-control form-control-sm  " />
              </div>
              <div className="col-sm-12">
                <label className="form-label" >Donde:</label>
                <input type="text" placeholder="" className="form-control form-control-sm  " />
              </div>
              <div className="col-sm-6">
                <label className="form-label" >Nombre:</label>
                <input type="text" placeholder="" className="form-control form-control-sm  " />
              </div>
              <div className="col-sm-6">
                <label className="form-label" >Parentesco:</label>
                <input type="text" placeholder="" className="form-control form-control-sm  " />
              </div>
              <div className="col-sm-12">
                <label className="form-label" >Cual:</label>
                <input type="text" placeholder="" className="form-control form-control-sm  " />
              </div>
              <div className="col-sm-12">
                <label className="form-label">Donde se ubica:</label>
                <select value={motivovisita} onChange={motivovisitafun} className="form-control form-control-sm" id="pregunta2_3" aria-describedby="validationServer04Feedback" required>
                <option value=""> SELECCIONE </option><option value="1"> EN MEDELLIN </option><option value="3"> OTRO DEPARTAMENTO </option><option value="2"> OTRO MUNICIPIO DE ANTIOQUIA </option><option value="4"> OTRO PAIS </option>   
               </select>
              </div>
              <div className="col-sm-12">
                <label className="form-label">Cual pais:</label>
                <select value={motivovisita} onChange={motivovisitafun} className="form-control form-control-sm" id="pregunta2_3" aria-describedby="validationServer04Feedback" required>
                    <option value=""> SELECCIONE </option><option value="3"> AFGANISTAN </option><option value="4"> ALBANIA </option><option value="5"> ALEMANIA </option><option value="6"> ANDORRA </option><option value="7"> ANGOLA </option><option value="8"> ANGUILLA </option><option value="9"> ANTIGUA Y BARBUDA </option><option value="10"> ANTILLAS HOLANDESAS </option><option value="11"> ARABIA SAUDI </option><option value="12"> ARGELIA </option><option value="13"> ARGENTINA </option><option value="14"> ARMENIA </option><option value="15"> ARUBA </option><option value="16"> AUSTRALIA </option><option value="17"> AUSTRIA </option><option value="18"> AZERBAIYAN </option><option value="19"> BAHAMAS </option><option value="20"> BAHREIN </option><option value="21"> BANGLADESH </option><option value="22"> BARBADOS </option><option value="23"> BELARUS </option><option value="24"> BELGICA </option><option value="25"> BELICE </option><option value="26"> BENIN </option><option value="27"> BERMUDAS </option><option value="28"> BHUTÁN </option><option value="29"> BOLIVIA </option><option value="30"> BOSNIA Y HERZEGOVINA </option><option value="31"> BOTSWANA </option><option value="32"> BRASIL </option><option value="33"> BRUNEI </option><option value="34"> BULGARIA </option><option value="35"> BURKINA FASO </option><option value="36"> BURUNDI </option><option value="37"> CABO VERDE </option><option value="38"> CAMBOYA </option><option value="39"> CAMERUN </option><option value="40"> CANADA </option><option value="41"> CHAD </option><option value="42"> CHILE </option><option value="43"> CHINA </option><option value="44"> CHIPRE </option><option value="1"> COLOMBIA </option><option value="45"> COMORES </option><option value="46"> CONGO </option><option value="47"> COREA </option><option value="48"> COREA DEL NORTE  </option><option value="49"> COSTA DE MARFIL </option><option value="50"> COSTA RICA </option><option value="51"> CROACIA </option><option value="52"> CUBA </option><option value="53"> DINAMARCA </option><option value="54"> DJIBOUTI </option><option value="55"> DOMINICA </option><option value="56"> ECUADOR </option><option value="57"> EGIPTO </option><option value="58"> EL SALVADOR </option><option value="59"> EMIRATOS ARABES UNIDOS </option><option value="60"> ERITREA </option><option value="61"> ESLOVENIA </option><option value="62"> ESPAÑA </option><option value="63"> ESTADOS UNIDOS DE AMERICA </option><option value="64"> ESTONIA </option><option value="65"> ETIOPIA </option><option value="66"> FIJI </option><option value="67"> FILIPINAS </option><option value="68"> FINLANDIA </option><option value="69"> FRANCIA </option><option value="70"> GABON </option><option value="71"> GAMBIA </option><option value="72"> GEORGIA </option><option value="73"> GHANA </option><option value="74"> GIBRALTAR </option><option value="75"> GRANADA </option><option value="76"> GRECIA </option><option value="77"> GROENLANDIA </option><option value="78"> GUADALUPE </option><option value="79"> GUAM </option><option value="80"> GUATEMALA </option><option value="81"> GUAYANA FRANCESA </option><option value="82"> GUERNESEY </option><option value="83"> GUINEA </option><option value="84"> GUINEA ECUATORIAL </option><option value="85"> GUINEA-BISSAU </option><option value="86"> GUYANA </option><option value="87"> HAITI </option><option value="88"> HONDURAS </option><option value="89"> HONG KONG </option><option value="90"> HUNGRIA </option><option value="91"> INDIA </option><option value="92"> INDONESIA </option><option value="93"> IRAN </option><option value="94"> IRAQ </option><option value="95"> IRLANDA </option><option value="96"> ISLA DE MAN </option><option value="97"> ISLA NORFOLK </option><option value="98"> ISLANDIA </option><option value="99"> ISLAS ALAND </option><option value="100"> ISLAS CAIMÁN </option><option value="101"> ISLAS COOK </option><option value="102"> ISLAS DEL CANAL </option><option value="103"> ISLAS FEROE </option><option value="104"> ISLAS MALVINAS </option><option value="105"> ISLAS MARIANAS DEL NORTE </option><option value="106"> ISLAS MARSHALL </option><option value="107"> ISLAS PITCAIRN </option><option value="108"> ISLAS SALOMON </option><option value="109"> ISLAS TURCAS Y CAICOS </option><option value="110"> ISLAS VIRGENES BRITANICAS </option><option value="111"> ISLAS VÍRGENES DE LOS ESTADOS UNIDOS </option><option value="112"> ISRAEL </option><option value="113"> ITALIA </option><option value="114"> JAMAICA </option><option value="115"> JAPON </option><option value="116"> JERSEY </option><option value="117"> JORDANIA </option><option value="118"> KAZAJSTAN </option><option value="119"> KENIA </option><option value="120"> KIRGUISTAN </option><option value="121"> KIRIBATI </option><option value="122"> KUWAIT </option><option value="123"> LAOS </option><option value="124"> LESOTHO </option><option value="125"> LETONIA </option><option value="126"> LIBANO </option><option value="127"> LIBERIA </option><option value="128"> LIBIA </option><option value="129"> LIECHTENSTEIN </option><option value="130"> LITUANIA </option><option value="131"> LUXEMBURGO </option><option value="132"> MACAO </option><option value="133"> MACEDONIA  </option><option value="134"> MADAGASCAR </option><option value="135"> MALASIA </option><option value="136"> MALAWI </option><option value="137"> MALDIVAS </option><option value="138"> MALI </option><option value="139"> MALTA </option><option value="140"> MARRUECOS </option><option value="141"> MARTINICA </option><option value="142"> MAURICIO </option><option value="143"> MAURITANIA </option><option value="144"> MAYOTTE </option><option value="145"> MEXICO </option><option value="146"> MICRONESIA </option><option value="147"> MOLDAVIA </option><option value="148"> MONACO </option><option value="149"> MONGOLIA </option><option value="150"> MONTENEGRO </option><option value="151"> MONTSERRAT </option><option value="152"> MOZAMBIQUE </option><option value="153"> MYANMAR </option><option value="154"> NAMIBIA </option><option value="155"> NAURU </option><option value="156"> NEPAL </option><option value="157"> NICARAGUA </option><option value="158"> NIGER </option><option value="159"> NIGERIA </option><option value="160"> NIUE </option><option value="161"> NORUEGA </option><option value="162"> NUEVA CALEDONIA </option><option value="163"> NUEVA ZELANDA </option><option value="164"> OMAN </option><option value="165"> OTROS PAISES  O TERRITORIOS DE AMERICA DEL NORTE </option><option value="166"> OTROS PAISES O TERRITORIOS  DE SUDAMERICA </option><option value="167"> OTROS PAISES O TERRITORIOS DE AFRICA </option><option value="168"> OTROS PAISES O TERRITORIOS DE ASIA </option><option value="169"> OTROS PAISES O TERRITORIOS DE LA UNION EUROPEA </option><option value="170"> OTROS PAISES O TERRITORIOS DE OCEANIA </option><option value="171"> OTROS PAISES O TERRITORIOS DEL CARIBE Y AMERICA CENTRAL </option><option value="172"> OTROS PAISES O TERRITORIOS DEL RESTO DE EUROPA </option><option value="173"> PAISES BAJOS </option><option value="174"> PAKISTAN </option><option value="175"> PALAOS </option><option value="176"> PALESTINA </option><option value="177"> PANAMA </option><option value="178"> PAPUA NUEVA GUINEA </option><option value="179"> PARAGUAY </option><option value="180"> PERU </option><option value="181"> POLINESIA FRANCESA </option><option value="182"> POLONIA </option><option value="183"> PORTUGAL </option><option value="184"> PUERTO RICO </option><option value="185"> QATAR </option><option value="186"> REINO UNIDO </option><option value="187"> REP.DEMOCRATICA DEL CONGO </option><option value="188"> REPUBLICA CENTROAFRICANA </option><option value="189"> REPUBLICA CHECA </option><option value="190"> REPUBLICA DOMINICANA </option><option value="191"> REPUBLICA ESLOVACA </option><option value="192"> REUNION </option><option value="193"> RUANDA </option><option value="194"> RUMANIA </option><option value="195"> RUSIA </option><option value="196"> SAHARA OCCIDENTAL </option><option value="197"> SAMOA </option><option value="198"> SAMOA AMERICANA </option><option value="199"> SAN BARTOLOME </option><option value="200"> SAN CRISTOBAL Y NIEVES </option><option value="201"> SAN MARINO </option><option value="202"> SAN MARTIN (PARTE FRANCESA) </option><option value="203"> SAN PEDRO Y MIQUELON  </option><option value="204"> SAN VICENTE Y LAS GRANADINAS </option><option value="205"> SANTA HELENA </option><option value="206"> SANTA LUCIA </option><option value="207"> SANTA SEDE </option><option value="208"> SANTO TOME Y PRINCIPE </option><option value="209"> SENEGAL </option><option value="210"> SERBIA </option><option value="211"> SEYCHELLES </option><option value="212"> SIERRA LEONA </option><option value="213"> SINGAPUR </option><option value="214"> SIRIA </option><option value="215"> SOMALIA </option><option value="216"> SRI LANKA </option><option value="217"> SUDAFRICA </option><option value="218"> SUDAN </option><option value="219"> SUECIA </option><option value="220"> SUIZA </option><option value="221"> SURINAM </option><option value="222"> SVALBARD Y JAN MAYEN </option><option value="223"> SWAZILANDIA </option><option value="224"> TADYIKISTAN </option><option value="225"> TAILANDIA </option><option value="226"> TANZANIA </option><option value="227"> TIMOR ORIENTAL </option><option value="228"> TOGO </option><option value="229"> TOKELAU </option><option value="230"> TONGA </option><option value="231"> TRINIDAD Y TOBAGO </option><option value="232"> TUNEZ </option><option value="233"> TURKMENISTAN </option><option value="234"> TURQUIA </option><option value="235"> TUVALU </option><option value="236"> UCRANIA </option><option value="237"> UGANDA </option><option value="238"> URUGUAY </option><option value="239"> UZBEKISTAN </option><option value="240"> VANUATU </option><option value="2"> VENEZUELA </option><option value="241"> VIETNAM </option><option value="242"> WALLIS Y FORTUNA </option><option value="243"> YEMEN </option><option value="244"> ZAMBIA </option><option value="245"> ZIMBABWE </option> 
               </select>
              </div>
              <div className="col-sm-12">
                <label className="form-label">Cual departamento:</label>
                <select value={motivovisita} onChange={motivovisitafun} className="form-control form-control-sm" id="pregunta2_3" aria-describedby="validationServer04Feedback" required>
                <option value=""> SELECCIONE </option><option value="28"> AMAZONAS </option><option value="24"> ARAUCA </option><option value="27"> ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA </option><option value="1"> ATLÁNTICO </option><option value="2"> BOGOTÁ, D.C. </option><option value="3"> BOLÍVAR </option><option value="4"> BOYACÁ </option><option value="5"> CALDAS </option><option value="6"> CAQUETÁ </option><option value="25"> CASANARE </option><option value="7"> CAUCA </option><option value="8"> CESAR </option><option value="11"> CHOCÓ </option><option value="9"> CÓRDOBA </option><option value="10"> CUNDINAMARCA </option><option value="29"> GUAINÍA </option><option value="30"> GUAVIARE </option><option value="12"> HUILA </option><option value="13"> LA GUAJIRA </option><option value="14"> MAGDALENA </option><option value="15"> META </option><option value="16"> NARIÑO </option><option value="17"> NORTE DE SANTANDER </option><option value="26"> PUTUMAYO </option><option value="18"> QUINDIO </option><option value="19"> RISARALDA </option><option value="20"> SANTANDER </option><option value="21"> SUCRE </option><option value="22"> TOLIMA </option><option value="23"> VALLE DEL CAUCA </option><option value="31"> VAUPÉS </option><option value="32"> VICHADA </option>
               </select>
              </div>
              <div className="col-sm-12">
                <label className="form-label">Cual municipio:</label>
                <select value={motivovisita} onChange={motivovisitafun} className="form-control form-control-sm" id="pregunta2_3" aria-describedby="validationServer04Feedback" required>
                  <option value=""> SELECCIONE </option><option value="1"> ABEJORRAL </option><option value="2"> ABRIAQUÍ </option><option value="3"> ALEJANDRÍA </option><option value="4"> AMAGÁ </option><option value="5"> AMALFI </option><option value="6"> ANDES </option><option value="7"> ANGELÓPOLIS </option><option value="8"> ANGOSTURA </option><option value="9"> ANORÍ </option><option value="11"> ANZÁ </option><option value="12"> APARTADÓ </option><option value="13"> ARBOLETES </option><option value="14"> ARGELIA </option><option value="15"> ARMENIA </option><option value="16"> BARBOSA </option><option value="18"> BELLO </option><option value="17"> BELMIRA </option><option value="19"> BETANIA </option><option value="20"> BETULIA </option><option value="22"> BRICEÑO </option><option value="23"> BURITICÁ </option><option value="24"> CÁCERES </option><option value="25"> CAICEDO </option><option value="26"> CALDAS </option><option value="27"> CAMPAMENTO </option><option value="28"> CAÑASGORDAS </option><option value="29"> CARACOLÍ </option><option value="30"> CARAMANTA </option><option value="31"> CAREPA </option><option value="33"> CAROLINA </option><option value="34"> CAUCASIA </option><option value="35"> CHIGORODÓ </option><option value="36"> CISNEROS </option><option value="21"> CIUDAD BOLÍVAR </option><option value="37"> COCORNÁ </option><option value="38"> CONCEPCIÓN </option><option value="39"> CONCORDIA </option><option value="40"> COPACABANA </option><option value="41"> DABEIBA </option><option value="42"> DONMATÍAS </option><option value="43"> EBÉJICO </option><option value="44"> EL BAGRE </option><option value="32"> EL CARMEN DE VIBORAL </option><option value="103"> EL SANTUARIO </option><option value="45"> ENTRERRÍOS </option><option value="46"> ENVIGADO </option><option value="47"> FREDONIA </option><option value="48"> FRONTINO </option><option value="49"> GIRALDO </option><option value="50"> GIRARDOTA </option><option value="51"> GÓMEZ PLATA </option><option value="52"> GRANADA </option><option value="53"> GUADALUPE </option><option value="54"> GUARNE </option><option value="55"> GUATAPÉ </option><option value="56"> HELICONIA </option><option value="57"> HISPANIA </option><option value="58"> ITAGÜÍ </option><option value="59"> ITUANGO </option><option value="60"> JARDÍN </option><option value="61"> JERICÓ </option><option value="62"> LA CEJA </option><option value="63"> LA ESTRELLA </option><option value="64"> LA PINTADA </option><option value="65"> LA UNIÓN </option><option value="66"> LIBORINA </option><option value="67"> MACEO </option><option value="68"> MARINILLA </option><option value="69"> MONTEBELLO </option><option value="70"> MURINDÓ </option><option value="71"> MUTATÁ </option><option value="72"> NARIÑO </option><option value="74"> NECHÍ </option><option value="73"> NECOCLÍ </option><option value="75"> OLAYA </option><option value="76"> PEÑOL </option><option value="77"> PEQUE </option><option value="78"> PUEBLORRICO </option><option value="79"> PUERTO BERRÍO </option><option value="80"> PUERTO NARE </option><option value="81"> PUERTO TRIUNFO </option><option value="82"> REMEDIOS </option><option value="83"> RETIRO </option><option value="84"> RIONEGRO </option><option value="85"> SABANALARGA </option><option value="86"> SABANETA </option><option value="87"> SALGAR </option><option value="88"> SAN ANDRÉS DE CUERQUÍA </option><option value="89"> SAN CARLOS </option><option value="90"> SAN FRANCISCO </option><option value="91"> SAN JERÓNIMO </option><option value="92"> SAN JOSÉ DE LA MONTAÑA </option><option value="93"> SAN JUAN DE URABÁ </option><option value="94"> SAN LUIS </option><option value="95"> SAN PEDRO DE LOS MILAGROS </option><option value="96"> SAN PEDRO DE URABÁ </option><option value="97"> SAN RAFAEL </option><option value="98"> SAN ROQUE </option><option value="99"> SAN VICENTE FERRER </option><option value="100"> SANTA BÁRBARA </option><option value="10"> SANTA FÉ DE ANTIOQUIA </option><option value="101"> SANTA ROSA DE OSOS </option><option value="102"> SANTO DOMINGO </option><option value="104"> SEGOVIA </option><option value="105"> SONSÓN </option><option value="106"> SOPETRÁN </option><option value="107"> TÁMESIS </option><option value="108"> TARAZÁ </option><option value="109"> TARSO </option><option value="110"> TITIRIBÍ </option><option value="111"> TOLEDO </option><option value="112"> TURBO </option><option value="113"> URAMITA </option><option value="114"> URRAO </option><option value="115"> VALDIVIA </option><option value="116"> VALPARAÍSO </option><option value="117"> VEGACHÍ </option><option value="118"> VENECIA </option><option value="119"> VIGÍA DEL FUERTE </option><option value="120"> YALÍ </option><option value="121"> YARUMAL </option><option value="122"> YOLOMBÓ </option><option value="123"> YONDÓ </option><option value="124"> ZARAGOZA </option>
               </select>
              </div>
              
            </div>
          </IonList>
<br />



        
    <div className="social-card2">
      <span className="label2">Dirección de residencia</span>
      <span className="value2">
      Ingrese la dirección según el siguiente ejemplo, diligenciando los campos requeridos que identifiquen la dirección actual; los campos que no requiera los pude dejar en blanco.
      Vaya verificando en el recuadro inferior "Dirección" el resultado.
      Ejemplo:
      </span>
      <span className="value2">
      Vía principal: CARRERA 42 B SUR
      </span>
      <span className="value2">
      Vía secundaria: 25 A ESTE - 135
      </span>
      <span className="value2">

      Complemento: Apartamento 101
      </span>
    </div> 
      <br />

      <div className=' shadow p-3 mb-5 bg-white rounded'>
  <IonList>
  <div className="row g-3 was-validated ">
          <div className="col-sm">
                    <label  className="form-label">Via principal:</label>
                    <select value={tipovisita} onInput={tipovisitafun} className="form-control form-control-sm" id="pregunta2_3" aria-describedby="validationServer04Feedback" required>
                        <option value=""> SELECCIONE </option>
                        <option value="1"> AUTOPISTA </option>
                        <option value="2"> AVENIDA </option>
                        <option value="3"> AVENIDA CALLE </option>
                        <option value="4"> AVENIDA CARRERA </option>
                        <option value="5"> BULEVAR </option>
                        <option value="6"> CALLE </option>
                        <option value="7"> CARRERA </option>
                        <option value="8"> CIRCULAR </option>
                        <option value="10"> CIRCUNVALAR </option>
                        <option value="11"> CTAS CORRIDAS </option>
                        <option value="12"> DIAGONAL </option>
                        <option value="9"> KILOMETRO </option>
                        <option value="20"> OTRA </option>
                        <option value="13"> PASAJE </option>
                        <option value="14"> PASEO </option>
                        <option value="15"> PEATONAL </option>
                        <option value="16"> TRANSVERSAL </option>
                        <option value="17"> TRONCAL </option>
                        <option value="18"> VARIANTE </option>
                        <option value="19"> VIA </option> 
                    </select>
                    </div>
          
            <div className="col-sm">
              <label  className="form-label" style={{color: 'white'}}>.</label>
              <input type="text" placeholder="" className="form-control form-control-sm  "  required/>
            </div>
            <div className="col-sm">
              <label  className="form-label" style={{color: 'white'}}>.</label>
              <input type="text" placeholder="" className="form-control form-control-sm  "  />
            </div>
            <div className="col-sm">
                    <label  className="form-label" style={{color: 'white'}}>.</label>
                    <select value={tipovisita} onInput={tipovisitafun} className="form-control form-control-sm" id="pregunta2_3" aria-describedby="validationServer04Feedback" >
                    <option value=""> SELECCIONE </option>
                    <option value="5"> BIS </option>
                    <option value="3"> ESTE </option>
                    <option value="2"> NORTE </option>
                    <option value="4"> OESTE </option>
                    <option value="1"> SUR </option>   
                    </select>
                    </div>

                <div className="simbolo col-sm-1">
                <label ><br/></label>
                <h4>#</h4>
            </div>    
          </div>
          
         
  </IonList>

  <IonList>
  <div className="row g-3 was-validated ">
  <div className="col-sm">
              <label  className="form-label" >Via secundaria:</label>
              <input type="number" placeholder="" className="form-control form-control-sm  "  />
            </div>

            
          
            <div className="col-sm">
              <label  className="form-label" style={{color: 'white'}}>.</label>
              <input type="text" placeholder="" className="form-control form-control-sm  "  />
            </div>


            <div className="col-sm">
                    <label  className="form-label" style={{color: 'white'}}>.</label>
                    <select value={tipovisita} onInput={tipovisitafun} className="form-control form-control-sm" id="pregunta2_3" aria-describedby="validationServer04Feedback" >
                    <option value=""> SELECCIONE </option>
                    <option value="5"> BIS </option>
                    <option value="3"> ESTE </option>
                    <option value="2"> NORTE </option>
                    <option value="4"> OESTE </option>
                    <option value="1"> SUR </option> 
                    </select>
              </div>

              <div className="simbolo col-sm-1 ">
                <label ><br/></label>
                <h4>-</h4>
            </div>


            <div className="col-sm">
              <label  className="form-label" style={{color: 'white'}}>.</label>
              <input type="number" placeholder="" className="form-control form-control-sm  "  />
            </div>
            
          </div>
  </IonList>

  <IonList>
  <div className="row g-3 was-validated ">
            <div className="col-sm">
              <label  className="form-label" >Complemento</label>
              <input type="text" placeholder="" className="form-control form-control-sm  "  required/>
            </div>
          </div>
  </IonList>
<hr />
  <IonList>
  <div className="row g-3 was-validated ">
            <div className="col-sm">
              <label  className="form-label" >Direccion:</label>
              <input disabled type="text" placeholder="" className="form-control form-control-sm  "  required/>
            </div>
          </div>
  </IonList>
  <hr />

  <IonList>
  <div className="row g-3 was-validated ">
            <div className="col-sm">
                    <label  className="form-label" >Rural/Urbano</label>
                    <select value={tipovisita} onInput={tipovisitafun} className="form-control form-control-sm" id="pregunta2_3" aria-describedby="validationServer04Feedback" required>
                    <option value=""> SELECCIONE </option>
                    <option value="2"> RURAL </option>
                    <option value="1"> URBANO </option>
                    </select>
              </div>

                <div className="col-sm">
                  <label  className="form-label" >Sector:</label>
                  <input type="text" placeholder="" className="form-control form-control-sm  "  />
                </div>

          </div>
  </IonList>


  <IonList>
  <div className="row g-3 was-validated ">
            <div className="col-sm">
                    <label  className="form-label" >Comuna</label>
                    <select value={tipovisita} onInput={tipovisitafun} className="form-control form-control-sm" id="pregunta2_3" aria-describedby="validationServer04Feedback" required>
                    <option value=""> SELECCIONE </option>
                    <option value="1"> 1 Popular </option>
                    <option value="10"> 10 La Candelaria </option>
                    <option value="11"> 11 Laureles Estadio </option>
                    <option value="12"> 12 La América </option>
                    <option value="13"> 13 San Javier </option>
                    <option value="14"> 14 El Poblado </option>
                    <option value="15"> 15 Guayabal </option>
                    <option value="16"> 16 Belén </option>
                    <option value="17"> 17 Ciudadela </option>
                    <option value="2"> 2 Santa Cruz </option>
                    <option value="120"> 20 - FUERA DE MEDELLIN </option>
                    <option value="121"> 21 - FUERA DE ANTIOQUIA </option>
                    <option value="3"> 3 Manrique </option>
                    <option value="4"> 4 Aranjuez </option>
                    <option value="5"> 5 Castilla </option>
                    <option value="50"> 50 Palmitas </option>
                    <option value="6"> 6 Doce de Octubre </option>
                    <option value="60"> 60 San Cristóbal </option>
                    <option value="7"> 7 Robledo </option>
                    <option value="70"> 70 Altavista </option>
                    <option value="8"> 8 Villa Hermosa </option>
                    <option value="80"> 80 San Antonio de Prado </option>
                    <option value="9"> 9 Buenos Aires </option>
                    <option value="90"> 90 Santa Elena </option>
                    <option value="91"> Otro </option>
                    </select>
              </div>
            <div className="col-sm">
                    <label  className="form-label" >Barrio</label>
                    <select value={tipovisita} onInput={tipovisitafun} className="form-control form-control-sm" id="pregunta2_3" aria-describedby="validationServer04Feedback" required>
                    <option value=""> SELECCIONE </option><option value="12001"> 20 - FUERA DE MEDELLIN </option><option value="12101"> 21 - FUERA DE ANTIOAUIA </option><option value="7002"> Aguas Frías-7002 </option><option value="1416"> Alejandría-1416 </option><option value="905"> Alejandro Echavarría-905 </option><option value="514"> Alfonso López-514 </option><option value="708"> Altamira-708 </option><option value="7005"> Altavista Central-7005 </option><option value="1613"> Altavista-1613 </option><option value="1408"> Altos del Poblado-1408 </option><option value="206"> Andalucia-206 </option><option value="1318"> Antonio Nariño-1318 </option><option value="413"> Aranjuez-413 </option><option value="914"> Asomadera Nº 1-914 </option><option value="915"> Asomadera Nº 2-915 </option><option value="916"> Asomadera Nº 3-916 </option><option value="8005"> Astillero-8005 </option><option value="1420"> Astorga-1420 </option><option value="713"> Aures Nº 1-713 </option><option value="712"> Aures Nº 2-712 </option><option value="906"> Barrio Caicedo-906 </option><option value="1401"> Barrio Colombia-1401 </option><option value="1013"> Barrio Colón-1013 </option><option value="1210"> Barrio Cristóbal-1210 </option><option value="902"> Barrios de Jesús-902 </option><option value="9004"> Barro Blanco-9004 </option><option value="805"> Batallón Girardot-805 </option><option value="508"> Belalcázar-508 </option><option value="1603"> Belén-1603 </option><option value="1311"> Belencito-1311 </option><option value="9101"> BELLO </option><option value="714"> Bello Horizonte-714 </option><option value="401"> Berlín-401 </option><option value="404"> Bermejal-404 </option><option value="1312"> Betania-1312 </option><option value="1302"> Blanquizal-1302 </option><option value="1107"> Bolivariana-1107 </option><option value="1015"> Bomboná Nº 1-1015 </option><option value="903"> Bomboná Nº 2-903 </option><option value="6006"> Boquerón-6006 </option><option value="707"> Bosques de San Pablo-707 </option><option value="1016"> Bostón-1016 </option><option value="505"> Boyaca-505 </option><option value="414"> Brasilia-414 </option><option value="907"> Buenos Aires-907 </option><option value="7001"> Buga Patio Bonito-7001 </option><option value="7000"> Cabecera Altavista-7000 </option><option value="5000"> Cabecera Palmitas-5000 </option><option value="8000"> Cabecera San Ant de Pr.-8000 </option><option value="6000"> Cabecera San Cristóbal-6000 </option><option value="9000"> Cabecera Sta Elena-9000 </option><option value="1213"> Calasanz Parte Alta-1213 </option><option value="1202"> Calasanz-1202 </option><option value="1011"> Calle Nueva-1011 </option><option value="1208"> Campo Alegre-1208 </option><option value="1507"> Campo Amor-1507 </option><option value="410"> Campo Valdés Nº 1-410 </option><option value="303"> Campo Valdés Nº 2-303 </option><option value="517"> Caribe-517 </option><option value="1101"> Carlos E. Restrepo-1101 </option><option value="112"> Carpinelo-112 </option><option value="511"> Castilla-511 </option><option value="1404"> Castropol-1404 </option><option value="909"> Cataluña-909 </option><option value="515"> Cementerio Universal-515 </option><option value="1010"> Centro Administrativo-1010 </option><option value="702"> Cerro el Volador-702 </option><option value="1621"> Cerro Nutibara-1621 </option><option value="1701"> Ciudadela-1701 </option><option value="1008"> Corazón de Jesús-1008 </option><option value="709"> Córdoba-709 </option><option value="1509"> Cristo Rey-1509 </option><option value="1115"> Cuarta Brigada-1115 </option><option value="1607"> Diego Echavarría-1607 </option><option value="602"> Doce de Octubre Nº 1-602 </option><option value="603"> Doce de Octubre Nº 2-603 </option><option value="1317"> Eduardo Santos-1317 </option><option value="6010"> El Carmelo-6010 </option><option value="1414"> El Castillo-1414 </option><option value="9007"> El Cerro-9007 </option><option value="1004"> El Chagualo-1004 </option><option value="108"> El Compromiso-108 </option><option value="7003"> El Corazón El Morro-7003 </option><option value="1313"> El Corazón-1313 </option><option value="718"> El Cucaracho-718 </option><option value="1207"> El Danubio-1207 </option><option value="1413"> El Diamante Nº 2-1413 </option><option value="711"> El Diamante-711 </option><option value="7008"> El Jardín-7008 </option><option value="6017"> El Llano-6017 </option><option value="9008"> El Llano-9008 </option><option value="610"> El Mirador del Doce-610 </option><option value="1620"> El Nogal Los Almendros-1620 </option><option value="6002"> El Patio-6002 </option><option value="1301"> El Pesebre-1301 </option><option value="6011"> El Picacho-6011 </option><option value="810"> El Pinal-810 </option><option value="9005"> El Placer-9005 </option><option value="9009"> El Plan-9009 </option><option value="202"> El Playón de Los Comuneros-202 </option><option value="1418"> El Poblado-1418 </option><option value="306"> El Pomar-306 </option><option value="611"> El Progreso Nº 2-611 </option><option value="305"> El Raizal-305 </option><option value="1610"> El Rincón-1610 </option><option value="1501"> El Rodeo-1501 </option><option value="1316"> El Salado-1316 </option><option value="8006"> El Salado-8006 </option><option value="912"> El Salvador-912 </option><option value="1319"> El Socorro-1319 </option><option value="1409"> El Tesoro-1409 </option><option value="612"> El Triunfo-612 </option><option value="6003"> El Uvito-6003 </option><option value="1112"> El Velódromo-1112 </option><option value="6009"> El Yolombó-6009 </option><option value="808"> Enciso-808 </option><option value="9103"> ENVIGADO </option><option value="1005"> Estación Villa-1005 </option><option value="1113"> Estadio-1113 </option><option value="518"> Everfit-518 </option><option value="705"> Facultad de Minas Universidad Nacional-705 </option><option value="1601"> Fátima-1601 </option><option value="1201"> Ferrini-1201 </option><option value="503"> Florencia-503 </option><option value="1117"> Florida Nueva-1117 </option><option value="513"> Francisco Antonio Zea-513 </option><option value="719"> Fuente Clara-719 </option><option value="911"> Gerona-911 </option><option value="509"> Girardot-509 </option><option value="1604"> Granada-1604 </option><option value="104"> Granizal-104 </option><option value="1510"> Guayabal-1510 </option><option value="1007"> Guayaquil-1007 </option><option value="507"> Héctor Abad Gómez-507 </option><option value="1609"> Hondonada-1609 </option><option value="1002"> Hospital San Vicente-1002 </option><option value="9102"> ITAGUI </option><option value="416"> Jardín Botánico-416 </option><option value="1003"> Jesús Nazareno-1003 </option><option value="901"> Juan Pablo II-901 </option><option value="1307"> Juan XXIII - La Queibra-1307 </option><option value="607"> Kennedy-607 </option><option value="1422"> La Aguacatala-1422 </option><option value="109"> La Aldea Pablo VI-109 </option><option value="5007"> La Aldea-5007 </option><option value="1009"> La Alpujarra-1009 </option><option value="1204"> La América-1204 </option><option value="111"> La Avanzada-111 </option><option value="1019"> La Candelaria-1019 </option><option value="1110"> La Castellana-1110 </option><option value="1511"> La Colina-1511 </option><option value="311"> La Cruz-311 </option><option value="6004"> La Cuchilla-6004 </option><option value="110"> La Esperanza Nº 2-110 </option><option value="605"> La Esperanza-605 </option><option value="7006"> La Esperanza-7006 </option><option value="9104"> LA ESTRELLA </option><option value="1205"> La Floresta-1205 </option><option value="1417"> La Florida-1417 </option><option value="8001"> La Florida-8001 </option><option value="205"> La Francia-205 </option><option value="5006"> La Frisola-5006 </option><option value="204"> La Frontera-204 </option><option value="1320"> La Gabriela-1320 </option><option value="1612"> La Gloria-1612 </option><option value="6008"> La Ilusión-6008 </option><option value="201"> La Isla-201 </option><option value="804"> La Ladera-804 </option><option value="812"> La Libertad-812 </option><option value="1611"> La Loma de los Bernal-1611 </option><option value="6014"> La Loma-6014 </option><option value="802"> La Mansión-802 </option><option value="910"> La Milagrosa-910 </option><option value="1608"> La Mota-1608 </option><option value="1614"> La Palma-1614 </option><option value="6001"> La Palma-6001 </option><option value="706"> La Pilarica-706 </option><option value="412"> La Piñuela-412 </option><option value="1306"> La Pradera-1306 </option><option value="211"> La Rosa-211 </option><option value="301"> La Salle-301 </option><option value="817"> La Sierra-817 </option><option value="5002"> La Sucia-5002 </option><option value="5001"> La Suiza-5001 </option><option value="8007"> La Verde-8007 </option><option value="1405"> Lalinde-1405 </option><option value="1109"> Las Acacias-1109 </option><option value="502"> Las Brisas-502 </option><option value="411"> Las Esmeraldas-411 </option><option value="815"> Las Estancias-815 </option><option value="302"> Las Granjas-302 </option><option value="1314"> Las Independencias-1314 </option><option value="1406"> Las Lomas Nº 1-1406 </option><option value="1407"> Las Lomas Nº 2-1407 </option><option value="1617"> Las Mercedes-1617 </option><option value="1014"> Las Palmas-1014 </option><option value="9001"> Las Palmas-9001 </option><option value="1606"> Las Playas-1606 </option><option value="6015"> Las Playas-6015 </option><option value="1616"> Las Violetas-1616 </option><option value="1108"> Laureles-1108 </option><option value="704"> Liceo Universidad de Antioquia-704 </option><option value="806"> Llanaditas-806 </option><option value="710"> López de Mesa-710 </option><option value="1111"> Lorena-1111 </option><option value="913"> Loreto-913 </option><option value="1304"> Los Alcázares-1304 </option><option value="1615"> Los Alpes-1615 </option><option value="1017"> Los Angeles-1017 </option><option value="1411"> Los Balsos Nº 1-1411 </option><option value="1415"> Los Balsos Nº 2-1415 </option><option value="904"> Los Cerros - El Vergel-904 </option><option value="1114"> Los Colores-1114 </option><option value="1105"> Los Conquistadores-1105 </option><option value="807"> Los Mangos-807 </option><option value="1410"> Los Naranjos-1410 </option><option value="1203"> Los Pinos-1203 </option><option value="1419"> Manila-1419 </option><option value="307"> Manrique Central-307 </option><option value="409"> Manrique Central-409 </option><option value="308"> Manrique Oriental-308 </option><option value="313"> María Cano-Carambolas-313 </option><option value="9011"> Mazo-9011 </option><option value="9002"> Media Luna-9002 </option><option value="1305"> Metropolitano-1305 </option><option value="908"> Miraflores-908 </option><option value="415"> Miranda-415 </option><option value="1619"> Miravalle-1619 </option><option value="8003"> Montañita-8003 </option><option value="724"> Monteclaro-724 </option><option value="405"> Moravia-405 </option><option value="209"> Moscú Nº 1-209 </option><option value="105"> Moscú Nº 2-105 </option><option value="1103"> Naranjal-1103 </option><option value="6005"> Naranjal-6005 </option><option value="721"> Nazareth-721 </option><option value="1508"> Noel-1508 </option><option value="1618"> Nueva Villa de Aburrá-1618 </option><option value="725"> Nueva Villa de la Iguana-725 </option><option value="1315"> Nuevos Conquistadores-1315 </option><option value="917"> Ocho de Marzo-917 </option><option value="722"> Olaya Herrera-722 </option><option value="512"> Oleoducto-512 </option><option value="312"> Oriente-312 </option><option value="9105"> OTRO MUNICIPIO FUERA DEL VALLE DEL ABURRA </option><option value="203"> Pablo VI-203 </option><option value="6012"> Pajarito-6012 </option><option value="723"> Pajarito-723 </option><option value="716"> Palenque-716 </option><option value="403"> Palermo-403 </option><option value="1506"> Parque Juan Pablo II-1506 </option><option value="417"> Parque Norte-417 </option><option value="1421"> Patio Bonito-1421 </option><option value="6013"> Pedregal Alto-6013 </option><option value="604"> Pedregal-604 </option><option value="1012"> Perpetuo Socorro-1012 </option><option value="609"> Picachito-609 </option><option value="608"> Picacho-608 </option><option value="9010"> Piedra Gorda-9010 </option><option value="9003"> Piedras Blancas-9003 </option><option value="506"> Plaza de Ferias-506 </option><option value="103"> Popular-103 </option><option value="5008"> Potrera Miserenga-5008 </option><option value="8002"> Potrerito-8002 </option><option value="1001"> Prado-1001 </option><option value="519"> Progreso-519 </option><option value="717"> Robledo-717 </option><option value="1602"> Rosales-1602 </option><option value="9106"> SABANETA </option><option value="814"> San Antonio-814 </option><option value="1006"> San Benito-1006 </option><option value="1605"> San Bernardo-1605 </option><option value="6018"> San Cristóbal-6018 </option><option value="1020"> San Diego-1020 </option><option value="703"> San Germán-703 </option><option value="402"> San Isidro-402 </option><option value="1309"> San Javier Nº 1-1309 </option><option value="1308"> San Javier Nº 2-1308 </option><option value="1104"> San Joaquín-1104 </option><option value="6007"> San José de La Montaña-6007 </option><option value="7007"> San José del Manzanillo-7007 </option><option value="314"> San José la Cima Nº 1-314 </option><option value="315"> San José la Cima Nº 2-315 </option><option value="8008"> San José-8008 </option><option value="1412"> San Lucas-1412 </option><option value="606"> San Martín de Porres-606 </option><option value="803"> San Miguel-803 </option><option value="107"> San Pablo-107 </option><option value="7004"> San Pablo-7004 </option><option value="408"> San Pedro-408 </option><option value="210"> Santa Cruz-210 </option><option value="1504"> Santa Fé-1504 </option><option value="304"> Santa Inés-304 </option><option value="818"> Santa Lucía Las Estancias-818 </option><option value="1206"> Santa Lucía-1206 </option><option value="720"> Santa Margarita-720 </option><option value="1423"> Santa María de los Angeles-1423 </option><option value="1209"> Santa Mónica-1209 </option><option value="1303"> Santa Rosa de Lima-1303 </option><option value="1212"> Santa Teresita-1212 </option><option value="601"> Santander-601 </option><option value="101"> Santo Domingo Savio Nº 1-101 </option><option value="102"> Santo Domingo Savio Nº 2-102 </option><option value="5004"> Sector Central-5004 </option><option value="9006"> Sector Central-9006 </option><option value="407"> Sevilla-407 </option><option value="1505"> Shellmar-1505 </option><option value="1402"> SIMESA-1402 </option><option value="1211"> Simón Bolivar-1211 </option><option value="809"> Sucre-809 </option><option value="1102"> Suramericana-1102 </option><option value="504"> Tejelo-504 </option><option value="1502"> Tenche-1502 </option><option value="516"> Terminal de Transporte-516 </option><option value="501"> Toscana-501 </option><option value="6016"> Travesías-6016 </option><option value="811"> Trece de Noviembre-811 </option><option value="510"> Tricentenario-510 </option><option value="1503"> Trinidad-1503 </option><option value="1116"> U.D. Atanasio Girardot-1116 </option><option value="406"> Universidad de Antioquia-406 </option><option value="701"> Universidad Nacional-701 </option><option value="1106"> Universidad Pontificia-1106 </option><option value="5003"> Urquita-5003 </option><option value="1310"> Veinte de Julio-1310 </option><option value="309"> Versalles Nº 1-309 </option><option value="310"> Versalles Nº 2-310 </option><option value="1403"> Villa Carlota-1403 </option><option value="106"> Villa de Guadalupe-106 </option><option value="207"> Villa del Socorro-207 </option><option value="715"> Villa Flora-715 </option><option value="801"> Villa Hermosa-801 </option><option value="819"> Villa Lilliam-819 </option><option value="208"> Villa Niza-208 </option><option value="1018"> Villa Nueva-1018 </option><option value="816"> Villa Turbay-816 </option><option value="813"> Villatina-813 </option><option value="5005"> Volcana Guayabal-5005 </option><option value="8004"> Yarumalito-8004 </option>         
                    </select>
              </div>
          </div>
  </IonList>

  <IonList>
  <div className="row g-3 was-validated ">
            <div className="col-sm">
              <label  className="form-label" >Telefono1:</label>
              <input type="number" placeholder="" className="form-control form-control-sm  "  required/>
            <small  className="form-label">Minimo 10 digitos, si es fijo debe incluir el 604.</small>
            </div>

            <div className="col-sm">
              <label  className="form-label" >Telefono2:</label>
              <input  type="number" placeholder="" className="form-control form-control-sm  "  />
              <small  className="form-label">Minimo 10 digitos, si es fijo debe incluir el 604.</small>
            </div>
          </div>
  </IonList>
  

  </div>

  <div><IonButton color="success" onClick={enviar}>Guardar</IonButton><IonButton routerLink={`/tabs/tab15/${params.ficha}`}>Siguiente</IonButton></div>


        </div>



        <div className=' shadow p-3 mb-2 pt-0 bg-white rounded'>
          <IonList>
            <div className="alert alert-primary" role="alert">
              <span className="badge badge-secondary text-dark">UBICACIONES DE LA FAMILIA POSTERIOR A LA ATENCION</span>
            </div>
            <CustomDataTable  
                title="Ubicación"
                data={data}
                columns={columns}/>
          </IonList>


        </div>



      </IonContent>
    </IonPage>
  );
};

export default Tab14;
