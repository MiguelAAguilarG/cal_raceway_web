const aislantes_conductor_array = [
    ['THW, THHW, THW-2', [8.968, 11.68, 15.68, 28.19, 46.84, 62.77, 73.16, 86.00, 122.6, 143.4, 169.3, 201.1, 239.9, 296.5, 340.7, 384.4, 427.0, 509.7, 627.7, 710.3, 751.7, 791.7, 874.9, 953.8, 1200, 1400, 1598, 1795]],
    ['THHN, THWN, THWN-2', [6.258, 8.581, 13.61, 23.61, 32.71, 53.16, 62.77, 74.71, 100.8, 119.7, 143.4, 172.8, 208.8, 256.1, 297.3, 338.2, 378.3, 456.3, 559.7, 637.9, 677.2, 715.2, 794.3, 869.5, 0, 0, 0, 0]],
    ['XHH, XHHW, XHHW-2', [8.968, 11.68, 15.58, 28.19, 38.06, 52.52, 62.06, 73.94, 98.97, 117.7, 141.3, 170.5, 206.3, 251.9, 292.6, 333.3, 373.3, 450.6, 561.9, 640.2, 679.5, 717.5, 796.8, 872.2, 1108, 1300, 1492, 1682]],
    ['RHH, RHW, RHW-2', [18.90, 22.77, 28.19, 53.87, 67.16, 86.00, 98.13, 112.9, 171.6, 196.1, 226.1, 262.7, 306.7, 405.9, 457.3, 507.7, 556.5, 650.5, 782.9, 874.9, 920.8, 965.0, 1057, 1143, 1515, 1738, 1959, 2175]],
    ['RHH*, RHW*, RHW-2*', [13.48, 16.77, 21.48, 35.87, 46.84, 62.77, 73.16, 86.00, 112.6, 143.4, 169.3, 201.1, 239.9, 296.5, 340.7, 384.4, 427.0, 509.7, 627.7, 710.3, 751.7, 791.7, 874.9, 953.8, 1200, 1400, 1598, 1795]],
    ['desnudo', [2.68, 4.25, 6.76, 10.76, 17.09, 27.19, 34.28, 43.23, 55.80, 70.41, 88.74, 111.9, 141.1, 168, 201, 235, 268, 336, 404, 471, 505, 538, 606, 673, 842, 1011, 1180, 1349]],
    ['Solar (PV Accesories)', [25.428, 30.191, 36.531, 50.896, 75.738]]
];

const aislantes_conductor_D_array = [
    ['THW, THHW, THW-2', [3.378, 3.861, 4.470, 5.994, 7.722, 8.941, 9.652, 10.46, 12.50, 13.51, 14.68, 16.00, 17.48, 19.43, 20.83, 22.12, 23.32, 25.48, 28.27, 30.07, 30.94, 31.75, 33.38, 34.85, 39.09, 42.21, 45.11, 47.80]],
    ['THHN, THWN, THWN-2', [2.819, 3.302, 4.166, 5.486, 6.452, 8.230, 8.941, 9.754, 11.33, 12.34, 13.51, 14.83, 16.31, 18.06, 19.46, 20.75, 21.95, 24.10, 26.70, 28.50, 29.36, 30.18, 31.80, 33.27, 0, 0, 0, 0]],
    ['XHH, XHHW, XHHW-2', [3.378, 3.861, 4.470, 5.994, 6.960, 8.179, 8.890, 9.703, 11.23, 12.24, 13.41, 14.73, 16.21, 17.91, 19.30, 20.60, 21.79, 23.95, 26.75, 28.55, 29.41, 30.23, 31.85, 33.32, 37.57, 40.69, 43.59, 46.28]],
    ['RHH, RHW, RHW-2', [4.902, 5.385, 5.994, 8.280, 9246, 10.46, 11.18, 11.99, 14.78, 15.80, 16.97, 18.29, 19.76, 22.73, 24.13, 25.43, 26.62, 28.78, 31.57, 33.38, 34.24, 35.05, 36.68, 38.15, 43.92, 47.04, 49.94, 52.63]],
    ['RHH*, RHW*, RHW-2*', [4.140, 4.623, 5.232, 6.756, 7.722, 8.941, 9.652, 10.46, 12.50, 13.51, 14.68, 16.00, 17.48, 19.43, 20.83, 22.12, 23.32, 25.48, 28.27, 30.07, 30.94, 31.75, 33.38, 34.85, 39.09, 42.21, 45.11, 47.80]],
    ['desnudo', [1.85, 2.32, 2.95, 3.71, 4.67, 5.89, 6.60, 7.42, 8.43, 9.45, 10.62, 11.94, 13.41, 14.61, 16.00, 17.30, 18.49, 20.65, 22.68, 24.49, 25.35, 26.16, 27.79, 29.26, 32.74, 35.86, 38.76, 41.45]],
    ['Solar (PV Accesories)', [5.69, 6.2, 6.82, 8.05, 9.82]]
];

const tipos_conduit_array = [
    ['EMT', [15.8, 20.9, 26.6, 35.1, 40.9, 52.5, 69.4, 85.2, 97.4, 110.1, 0, 0]],
    ['ENT', [14.2, 19.3, 25.4, 34, 39.9, 51.3, 0, 0, 0, 0, 0, 0]],
    ['FMC', [16.1, 20.9, 25.9, 32.4, 39.1, 51.8, 63.5, 76.2, 88.9, 101, 0, 0]],
    ['IMC', [16.8, 21.9, 28.1, 36.8, 42.7, 54.6, 64.9, 80.7, 93.2, 105.4, 0, 0]],
    ['LFNC-A*', [16, 21, 26.5, 35.1, 40.7, 52.4, 0, 0, 0, 0, 0, 0]],
    ['LFNC-B*', [16.1, 21.1, 26.8, 35.4, 40.3, 51.6, 0, 0, 0, 0, 0, 0]],
    ['LFNC-C*', [15.7, 20.7, 26.2, 34.8, 40.3, 51.9, 0, 0, 0, 0, 0, 0]],
    ['LFMC', [16.1, 21.1, 26.8, 35.4, 40.3, 61.6, 63.3, 78.4, 89.4, 102.1, 0, 0]],
    ['RMC', [16.1, 21.2, 27, 35.4, 41.2, 52.9, 63.2, 78.5, 90.7, 102.9, 128.9, 154.8]],
    ['PVC, cédula 80', [13.4, 18.3, 23.8, 31.9, 37.5, 48.6, 58.2, 72.7, 84.5, 96.2, 121.1, 145]],
    ['PVC, cédula 40', [15.3, 20.4, 26.1, 34.5, 40.4, 52, 62.1, 77.3, 89.4, 101.5, 127.4, 153.2]],
    ['HDPE', [15.3, 20.4, 26.1, 34.5, 40.4, 52, 62.1, 77.3, 89.4, 101.5, 127.4, 153.2]],
    ['PVC, tipo A', [17.80, 23.1, 29.8, 38.1, 43.7, 54.7, 66.9, 82, 93.7, 106.2]],
    ['PVC, tipo EB', [0, 0, 0, 0, 0, 56.4, 0, 84.6, 96.6, 108.9, 135, 160.9]]
];

const calibres_string_array = ['14', '12', '10', '8', '6', '4', '3', '2', '1', '1/0', '2/0', '3/0', '4/0', '250', '300', '350', '400', '500', '600', '700', '750', '800', '900', '1000', '1250', '1500', '1750', '2000'];

const porcentaje_llenado_array = [[1,53], [2,31], [3,40]];

const tamano_conduit_string_array = ["1/2", "3/4", "1", "1 1/4", "1 1/2", "2", "2 1/2", "3", "3 1/2", "4", "5", "6"];

const tamano_completo_conduit_string_array = ["1/2 in:  16 mm", "3/4 in:  21 mm", "1 in:  27 mm", "1 1/4 in: 35 mm", "1 1/2 in: 41 mm", "2 in:  53 mm", "2 1/2 in: 63 mm", "3 in:  78 mm", "3 1/2 in: 91 mm", "4 in:  103 mm", "5 in:  129 mm", "6 in:  155 mm"];

lista_desplegable_aislamiento_HTML = `
<option value="THW, THHW, THW-2">THW, THHW, THW-2</option> 
<option value="THHN, THWN, THWN-2">THHN, THWN, THWN-2</option>
<option value="XHH, XHHW, XHHW-2">XHH, XHHW, XHHW-2</option>
<option value="RHH, RHW, RHW-2">RHH, RHW, RHW-2</option>
<option value="RHH*, RHW*, RHW-2*">RHH*, RHW*, RHW-2*</option>
<option value="desnudo">Sin aislamiento</option>
<option value="Solar (PV Accesories)">Solar (PV Accesories)</option>`;

var indice = 1;
window.addEventListener("DOMContentLoaded", first, false);

function first() {

    document.body.innerHTML = `
    <header>Calculadora de tubería (conduit) eléctrica</header>

    <div class="caja2" id="formulario0">
        <label for="decimales" class="label-text-right">Decimals (result): </label>
        <input type="number" min="3" max="16" step="1" value="3" name="decimales" id="decimales" class="datos">
    </div>

    <div class="caja_contenedor">
        <div class="caja4_sin_borde">
            <p></p>
            <p>Llenado<span class="text-chico">[%]</span>(fill)</p>
            <p>Tamaño (size)</p>
            <p>D. interior<span class="text-chico">[mm]</span></p>
        </div>
        <div class="caja4">
            <p class = "label-text-right">Tamaño menor</p>
            <p id="llenado_porc_tamano_menor" class = "resultados"></p>
            <p id="tamano_menor" class = "resultados"></p>
            <p id="D_interno_menor" class = "resultados"></p>
        </div>
        <div class="caja4" style="background-color: rgb(255, 180, 60);">
            <p class = "label-text-right">Tamaño</p>
            <p id="llenado_porc_tamano_aprox" class = "resultados"></p>
            <p id="tamano_aprox" class = "resultados"></p>
            <p id="D_interno_aprox" class = "resultados"></p>
        </div>
        <div class="caja4">
            <p class = "label-text-right">Tamaño mayor</p>
            <p id="llenado_porc_tamano_mayor" class = "resultados"></p>
            <p id="tamano_mayor" class = "resultados"></p>
            <p id="D_interno_mayor" class = "resultados"></p>
        </div>

    </div>

    <div class="caja_contenedor">

        <div class="caja4" style="background-color: rgb(255, 180, 60);">
            <p class = "label-text-right">Llenado<span class="text-chico">[mm<sup>2</sup>]:</span></p>
            <p id="llenado_mm" class = "resultados"></p>
        </div>

    </div>

    <div class="caja_contenedor">
        <form id="formulario">
            <div class="caja6">
                <select name="lista_desplegable_tipo_conduit" id="lista_desplegable_tipo_conduit" class="datos">
                    <option value="EMT">EMT</option> 
                    <option value="ENT">ENT</option> 
                    <option value="FMC">FMC</option>
                    <option value="IMC">IMC</option> 
                    <option value="LFNC-A*">LFNC-A*</option> 
                    <option value="LFNC-B*">LFNC-B*</option>
                    <option value="LFNC-C*">LFNC-C*</option>
                    <option value="LFMC">LFMC</option>
                    <option value="RMC">RMC</option>
                    <option value="PVC, cédula 80">PVC, cédula 80</option>
                    <option value="PVC, cédula 40">PVC, cédula 40</option>
                    <option value="HDPE">HDPE</option>
                    <option value="PVC, tipo A">PVC, tipo A</option>
                    <option value="PVC, tipo EB">PVC, tipo EB</option>
                </select>

                <select name="lista_desplegable_medida_conduit" id="lista_desplegable_medida_conduit" class="datos">
                    <option value="AUTO " selected>AUTO</option> 
                    <option value="1/2">1/2 in: &nbsp;&nbsp; 16 mm</option>
                    <option value="3/4">3/4 in: &nbsp;&nbsp; 21 mm</option>
                    <option value="1">1 in: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 27 mm</option>
                    <option value="1 1/4">1 1/4 in: 35 mm</option>
                    <option value="1 1/2">1 1/2 in: 41 mm</option>
                    <option value="2">2 in: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 53 mm</option>
                    <option value="2 1/2">2 1/2 in: 63 mm</option>
                    <option value="3">3 in: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 78 mm</option>
                    <option value="3 1/2">3 1/2 in: 91 mm</option>
                    <option value="4">4 in: &nbsp;&nbsp;&nbsp; 103 mm</option>
                    <option value="5">5 in: &nbsp;&nbsp;&nbsp; 129 mm</option>
                    <option value="6">6 in: &nbsp;&nbsp;&nbsp; 155 mm</option>
                </select>

                <label for="input_llenado_porc" class="label-text-right">Llenado[%]: </label>
                <input type="number" min="1" max="100" step="1" value="40" name="input_llenado_porc" id="input_llenado_porc" class="datos">
                <label for="auto_llenado_porc" class="label-text-right">AUTO: </label>
                <input type="checkbox" name="auto_llenado_porc" id="auto_llenado_porc" class="datos" checked>

            </div>
        </form>  
    </div>
        
    <div class="caja_contenedor">

        <div class="caja4_cables_sin_borde">
            <p class="text-p">Aislamiento (insulation)</p>
            <p class="text-p">Calibre <span class="text-chico">[AWG/kcmil]</span></p>
            <p class="text-p">Cantidad qty</p>
            <p class="text-p">D. exterior <span class="text-chico">[mm]</span></p>
        </div>

        <form id="formulario2">
            <div class="caja4_cables">
                <select name="lista_desplegable_aislamiento" id="lista_desplegable_aislamiento1" class="datos">
                    ${lista_desplegable_aislamiento_HTML}
                </select>

                <select name="lista_desplegable_calibre" id="lista_desplegable_calibre1" class="datos">
                    <option value="14">14</option>
                    <option value="12">12</option>
                    <option value="10">10</option>
                    <option value="8">8</option>
                    <option value="6">6</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                    <option value="1/0">1/0</option>
                    <option value="2/0">2/0</option>
                    <option value="3/0">3/0</option>
                    <option value="4/0">4/0</option>
                    <option value="250">250</option>
                    <option value="300">300</option>
                    <option value="350">350</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                    <option value="600">600</option>
                    <option value="700">700</option>
                    <option value="750">750</option>
                    <option value="800">800</option>
                    <option value="900">900</option>
                    <option value="1000">1000</option>
                    <option value="1250">1250</option>
                    <option value="1500">1500</option>
                    <option value="1750">1570</option>
                    <option value="2000">2000</option>
                </select>
    
                <input type="number" min="0" step="1" value="1" name="numero_conductores" id="numero_conductores1" class="datos">

                <p id="D_exterior1" class = "resultados"></p>
            </div>

        </form>

        <div class=caja4_version2>
            <input type="button" value="Quitar (remove)"  onclick="quitar()" class="datos">
            <input type="button" value="Agregar (add)" onclick="agregar()" class="datos">
        </div>
    </div>


    <div>
        <p class="nota">No aplica condiciones de atascamiento</p>
        <p class="nota">NOM-001-SEDE-2012</p>
        <p class="nota">NEC</p>
        <ul class="nota">
            <li class="nota_sinBullets">Chapter 9 tables</li>
            <ul>
                <li>Table 1</li>
                <li>Table 4</li>
                <li>Table 5</li>
                <li>Table 8</li>
            </ul>
        </ul>
    </div>
    `;

    document.getElementById("formulario0").addEventListener("change", calculo_principal);
    document.getElementById("formulario").addEventListener("change", calculo_principal);
    document.getElementById("formulario2").addEventListener("change", calculo_principal);
    calculo_principal();
}

function calculo_principal() {
    console.log("cambio");

    var object_variables = obtener_variables();

    var $decimales = object_variables.$decimales;

    var $tipo_conduit = object_variables.$tipo_conduit;
    var $medida_conduit_input = object_variables.$medida_conduit_input;

    var $llenado_porc_input = object_variables.$llenado_porc_input;
    var $auto_llenado = object_variables.$auto_llenado;

    for (let i_input_tipo_conduit = 0; i_input_tipo_conduit < tipos_conduit_array.length; i_input_tipo_conduit++) {

        if (tipos_conduit_array[i_input_tipo_conduit][0] == $tipo_conduit) {
            var mm_tamano_conduit_array = tipos_conduit_array[i_input_tipo_conduit][1];
            break;
        }

    }

    opts = document.getElementById("lista_desplegable_medida_conduit").options;

    for (let i = 1; i <= mm_tamano_conduit_array.length; i++) {
        opts[i].disabled = false;
        if (mm_tamano_conduit_array[i-1] == 0) {
            opts[i].disabled = true;
        }

    }

    for(let i = 1; i <= indice; i++) {

        document.getElementById("lista_desplegable_calibre" + String(i)).options[27].disabled = false;
        document.getElementById("lista_desplegable_calibre" + String(i)).options[26].disabled = false;
        document.getElementById("lista_desplegable_calibre" + String(i)).options[25].disabled = false;
        document.getElementById("lista_desplegable_calibre" + String(i)).options[24].disabled = false;

        if (document.getElementById("lista_desplegable_aislamiento" + String(i)).value == 'THHN, THWN, THWN-2') {
            document.getElementById("lista_desplegable_calibre" + String(i)).options[27].disabled = true;
            document.getElementById("lista_desplegable_calibre" + String(i)).options[26].disabled = true;
            document.getElementById("lista_desplegable_calibre" + String(i)).options[25].disabled = true;
            document.getElementById("lista_desplegable_calibre" + String(i)).options[24].disabled = true;
        }

    }

    var $cables = object_variables.$cables;
    var object_suma_areas = sumador_areas($cables);
    var $suma_areas = object_suma_areas.suma_areas;
    var $cantidad_conductores = object_suma_areas.cantidad_conductores;

    if ($auto_llenado == true) {
        document.getElementById("input_llenado_porc").disabled = true;
        document.getElementById("input_llenado_porc").className = "resultados";

        for (let i = 0; i < porcentaje_llenado_array.length; i++) {
            if ($cantidad_conductores >= porcentaje_llenado_array[i][0]) {
                document.getElementById("input_llenado_porc").value = porcentaje_llenado_array[i][1];
            }
        }

    } else{
        document.getElementById("input_llenado_porc").disabled = false;
        document.getElementById("input_llenado_porc").className = "datos";
    }

    var object_tamano_conduit = seleccionador_tamano_conduit($tipo_conduit, $suma_areas, $llenado_porc_input, 0, true);
    var $indice_conduit_seleccionado = object_tamano_conduit.indice_conduit;

    if ($medida_conduit_input != "AUTO") {
        for (let i = 0; i < tamano_conduit_string_array.length; i++) {

            if (tamano_conduit_string_array[i] == $medida_conduit_input) {
                if (i >= $indice_conduit_seleccionado) {
                    object_tamano_conduit = seleccionador_tamano_conduit($tipo_conduit, $suma_areas, $llenado_porc_input, i, true);
                    $indice_conduit_seleccionado = object_tamano_conduit.indice_conduit;
                }
            }
    
        }  
    }

    D_mm_cable_elegido_array = D_ext_cable($cables);

    for(let i = 0; i < indice; i++) {
        aux_D_exterior = document.getElementById("D_exterior" + String(i+1)).innerHTML = D_mm_cable_elegido_array[i];
        console.log(D_mm_cable_elegido_array[i]);
    }

    document.getElementById("llenado_mm").innerHTML = $suma_areas.toFixed($decimales);

    document.getElementById("tamano_aprox").innerHTML = tamano_completo_conduit_string_array[$indice_conduit_seleccionado];
    document.getElementById("D_interno_aprox").innerHTML = object_tamano_conduit.mm_tamano_conduit;
    document.getElementById("llenado_porc_tamano_aprox").innerHTML = object_tamano_conduit.llenado_porc_calculado.toFixed($decimales);

    object_tamano_conduit_menor = seleccionador_tamano_conduit($tipo_conduit, $suma_areas, $llenado_porc_input, $indice_conduit_seleccionado-1, false);


    document.getElementById("tamano_menor").innerHTML = tamano_completo_conduit_string_array[object_tamano_conduit_menor.indice_conduit];
    document.getElementById("D_interno_menor").innerHTML = object_tamano_conduit_menor.mm_tamano_conduit;
    document.getElementById("llenado_porc_tamano_menor").innerHTML = object_tamano_conduit_menor.llenado_porc_calculado.toFixed($decimales);

    object_tamano_conduit_mayor = seleccionador_tamano_conduit($tipo_conduit, $suma_areas, $llenado_porc_input, $indice_conduit_seleccionado+1, false);

    document.getElementById("tamano_mayor").innerHTML = tamano_completo_conduit_string_array[object_tamano_conduit_mayor.indice_conduit];
    document.getElementById("D_interno_mayor").innerHTML = object_tamano_conduit_mayor.mm_tamano_conduit;
    document.getElementById("llenado_porc_tamano_mayor").innerHTML = object_tamano_conduit_mayor.llenado_porc_calculado.toFixed($decimales);
    
}

function seleccionador_tamano_conduit($tipo_conduit, $suma_areas, $llenado_porc_input, $input_indice_conduit, $cumplir_condicion) {

    for (let i_input_tipo_conduit = 0; i_input_tipo_conduit < tipos_conduit_array.length; i_input_tipo_conduit++) {

        if (tipos_conduit_array[i_input_tipo_conduit][0] == $tipo_conduit) {
            var mm_tamano_conduit_array = tipos_conduit_array[i_input_tipo_conduit][1];
            break;
        }

    }

    var llenado_mm_conduit_calculado;

    for (let i_tamano_conduit = $input_indice_conduit; i_tamano_conduit < mm_tamano_conduit_array.length; i_tamano_conduit++) {

        llenado_mm_conduit_calculado = Math.PI*Math.pow(mm_tamano_conduit_array[i_tamano_conduit],2)/4*$llenado_porc_input/100;
        if (llenado_mm_conduit_calculado >= $suma_areas || $cumplir_condicion == false) {
            var indice_conduit = i_tamano_conduit;
            var mm_tamano_conduit = mm_tamano_conduit_array[i_tamano_conduit];
            var area_mm_conduit_calculado = Math.PI*Math.pow(mm_tamano_conduit_array[i_tamano_conduit],2)/4;
            break;
        }

    }

    var llenado_porc_calculado = $suma_areas*100/area_mm_conduit_calculado;

    console.log(indice_conduit, mm_tamano_conduit_array,  mm_tamano_conduit, area_mm_conduit_calculado, llenado_mm_conduit_calculado, llenado_porc_calculado);

    return {indice_conduit: indice_conduit,  mm_tamano_conduit:  mm_tamano_conduit, llenado_mm_conduit_calculado: llenado_mm_conduit_calculado, llenado_porc_calculado: llenado_porc_calculado};
    
}

function sumador_areas($cables) {

    var area_mm_cable_elegido_array_array = [];
    var area_mm_cable_elegido_array = [];
    var suma_areas_array = [];
    var suma_areas = 0.0;
    var cantidad_conductores = 0;
    
    for (let i_input_tipo_cable = 0; i_input_tipo_cable < indice; i_input_tipo_cable++) {

        for (let i_tipo_cable_array = 0; i_tipo_cable_array < aislantes_conductor_array.length; i_tipo_cable_array++) {
            if (aislantes_conductor_array[i_tipo_cable_array][0] == $cables[i_input_tipo_cable][0]) {
                area_mm_cable_elegido_array_array.push(aislantes_conductor_array[i_tipo_cable_array][1]);
                break;
            }
        }

        for (let i_input_calibre = 0; i_input_calibre < 28; i_input_calibre++) {
            if (calibres_string_array[i_input_calibre] == $cables[i_input_tipo_cable][1]) {
                area_mm_cable_elegido_array.push(area_mm_cable_elegido_array_array[i_input_tipo_cable][i_input_calibre]);
                suma_areas_array.push(area_mm_cable_elegido_array[i_input_tipo_cable]*$cables[i_input_tipo_cable][2]);
                suma_areas += area_mm_cable_elegido_array[i_input_tipo_cable]*$cables[i_input_tipo_cable][2];
                cantidad_conductores += $cables[i_input_tipo_cable][2];
                break;
            }
        }

    }

    console.log(area_mm_cable_elegido_array_array, area_mm_cable_elegido_array, suma_areas_array, suma_areas)

    return {suma_areas: suma_areas, cantidad_conductores: cantidad_conductores};

}

function D_ext_cable($cables) {

    var D_mm_cable_elegido_array_array = [];
    var D_mm_cable_elegido_array = [];
    
    for (let i_input_tipo_cable = 0; i_input_tipo_cable < indice; i_input_tipo_cable++) {

        for (let i_tipo_cable_array = 0; i_tipo_cable_array < aislantes_conductor_D_array.length; i_tipo_cable_array++) {
            if (aislantes_conductor_D_array[i_tipo_cable_array][0] == $cables[i_input_tipo_cable][0]) {
                D_mm_cable_elegido_array_array.push(aislantes_conductor_D_array[i_tipo_cable_array][1]);
                break;
            }
        }

        for (let i_input_calibre = 0; i_input_calibre < 28; i_input_calibre++) {
            if (calibres_string_array[i_input_calibre] == $cables[i_input_tipo_cable][1]) {
                D_mm_cable_elegido_array.push(D_mm_cable_elegido_array_array[i_input_tipo_cable][i_input_calibre]);
                break;
            }
        }

    }

    console.log(D_mm_cable_elegido_array_array, D_mm_cable_elegido_array)

    return D_mm_cable_elegido_array;

}

function obtener_variables() {
    var $decimales = Number.parseInt(document.getElementById("decimales").value);

    var $tipo_conduit = document.getElementById("lista_desplegable_tipo_conduit").value;
    var $medida_conduit_input = document.getElementById("lista_desplegable_medida_conduit").value;

    var $llenado_porc_input = Number.parseFloat(document.getElementById("input_llenado_porc").value);
    var $auto_llenado = document.getElementById("auto_llenado_porc").checked;

    var $cables = [];
    var aux_aislamiento;
    var aux_calibre;
    var aux_numero_conductores;

    for(let i = 1; i <= indice; i++) {
        aux_aislamiento = document.getElementById("lista_desplegable_aislamiento" + String(i)).value;
        aux_calibre = document.getElementById("lista_desplegable_calibre" + String(i)).value;
        aux_numero_conductores = Number.parseInt(document.getElementById("numero_conductores" + String(i)).value);

        $cables.push([aux_aislamiento, aux_calibre, aux_numero_conductores]);
    }

    console.log($tipo_conduit, $medida_conduit_input, $llenado_porc_input, $auto_llenado, $cables);

    return {$decimales:$decimales, $tipo_conduit: $tipo_conduit, $medida_conduit_input: $medida_conduit_input, $llenado_porc_input: $llenado_porc_input, $auto_llenado: $auto_llenado, $cables: $cables};
}

function agregar(validacion_quitar = false) {
    console.log("agregar_inicio");
    var cables = document.getElementById('formulario2');
    var aux = "";

    indice = indice + 1;

    var $cables = [];

    var aux_aislamiento;
    var aux_calibre;
    var aux_numero_conductores;

    for(let i = 1; i <= indice; i++) {
        if (validacion_quitar == true || i < indice) {
            aux_aislamiento = document.getElementById("lista_desplegable_aislamiento" + String(i)).value;
            aux_calibre = document.getElementById("lista_desplegable_calibre" + String(i)).value;
            aux_numero_conductores = Number.parseInt(document.getElementById("numero_conductores" + String(i)).value);
    
            $cables.push([aux_aislamiento, aux_calibre, aux_numero_conductores]); 
        }

    }

    for(let i = 1; i <= indice; i++) {

        aux += `
            <div class=caja4_cables>
                <select name="lista_desplegable_aislamiento" id="lista_desplegable_aislamiento${i}" class="datos">
                    ${lista_desplegable_aislamiento_HTML}
                </select>

                <select name="lista_desplegable_calibre" id="lista_desplegable_calibre${i}" class="datos">
                    <option value="14">14</option>
                    <option value="12">12</option>
                    <option value="10">10</option>
                    <option value="8">8</option>
                    <option value="6">6</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                    <option value="1/0">1/0</option>
                    <option value="2/0">2/0</option>
                    <option value="3/0">3/0</option>
                    <option value="4/0">4/0</option>
                    <option value="250">250</option>
                    <option value="300">300</option>
                    <option value="350">350</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                    <option value="600">600</option>
                    <option value="700">700</option>
                    <option value="750">750</option>
                    <option value="800">800</option>
                    <option value="900">900</option>
                    <option value="1000">1000</option>
                    <option value="1250">1250</option>
                    <option value="1500">1500</option>
                    <option value="1750">1570</option>
                    <option value="2000">2000</option>
                </select>

                <input type="number" min="0" step="1" value=1 name="numero_conductores${i}" id="numero_conductores${i}" class="datos">

                <p id="D_exterior${i}" class = "resultados"></p>
            </div>
        `;
    }
    
    cables.innerHTML = aux;

    aux_aislamiento = document.getElementById("lista_desplegable_aislamiento" + String(indice)).value;
    aux_calibre = document.getElementById("lista_desplegable_calibre" + String(indice)).value;
    aux_numero_conductores = Number.parseInt(document.getElementById("numero_conductores" + String(indice)).value);

    $cables.push([aux_aislamiento, aux_calibre, aux_numero_conductores]);

    var e = 0;
    for(let i = 1; i <= indice; i++) {
        document.getElementById("lista_desplegable_aislamiento" + String(i)).value = $cables[e][0];
        document.getElementById("lista_desplegable_calibre" + String(i)).value = $cables[e][1];
        document.getElementById("numero_conductores" + String(i)).value = $cables[e][2];
        e = e+1;
    }

    calculo_principal();

}

function quitar() {
    console.log("quitar_inicio");

    validacion_quitar = true;
    if (indice <= 1) {
        indice = 1;
    } else {
        indice = indice-2;
        agregar(validacion_quitar);
    }

}
