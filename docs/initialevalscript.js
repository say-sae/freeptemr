function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();











    //FUNCTIONS


 
    function hasUserInput(value) {
        return value.trim() !== '';
    }




    // VARIABLES

    var verticalposition = 10;


    //SUBJECTIVE VARIABLES
    var subpain = document.getElementById('painscale').value;
    var subloc = document.getElementById('location').value;
    var subons = document.getElementById('onset').value;
    var submoi = document.getElementById('moi').value;
    var subagg = document.getElementById('aggfac').value;
    var subeas = document.getElementById('easefac').value;
    var subimg = document.getElementById('imaging').value;
    var subhob = document.getElementById('hobbies').value;
    var subocc = document.getElementById('occupation').value;
    var subtext = document.getElementById('subjectivetext').value;
















    //OBJECTIVE VARIABLES














    //SHOULDER VARIABLES


    //Observation/Palpation/Specialtests
    var untrimmedshoulderobservation = document.getElementById('shoulderobservation').value;
    var shoulderobservation = trimLineBreaks(untrimmedshoulderobservation);
    var shoulderpalpation = document.getElementById('shoulderpalpation').value;
    var shouldermobility = document.getElementById('shouldermobility').value;
    var shoulderspecialtests = document.getElementById('shoulderspecialtests').value;


    //LEFT SHOULDER MMT
    var lshouldermmtflex = document.getElementById('lshouldermmtflex').value;
    var lshouldermmtplusminusflex = document.getElementById('lshouldermmtplusminusflex').value;
    var lshouldermmtext = document.getElementById('lshouldermmtext').value;
    var lshouldermmtplusminusext = document.getElementById('lshouldermmtplusminusext').value;
    var lshouldermmtabd = document.getElementById('lshouldermmtabd').value;
    var lshouldermmtplusminusabd = document.getElementById('lshouldermmtplusminusabd').value;
    var lshouldermmter = document.getElementById('lshouldermmter').value;
    var lshouldermmtplusminuser = document.getElementById('lshouldermmtplusminuser').value;
    var lshouldermmtir = document.getElementById('lshouldermmtir').value;
    var lshouldermmtplusminusir = document.getElementById('lshouldermmtplusminusir').value;

    //LEFT SHOULDER AROM

    var lshoulderaromflex = document.getElementById('lshoulderaromflex').value;
    var lshoulderaromext = document.getElementById('lshoulderaromext').value;
    var lshoulderaromabd = document.getElementById('lshoulderaromabd').value;
    var lshoulderaromer = document.getElementById('lshoulderaromer').value;
    var lshoulderaromir = document.getElementById('lshoulderaromir').value;

    //LEFT SHOULDER PROM

    var lshoulderpromflex = document.getElementById('lshoulderpromflex').value;
    var lshoulderpromext = document.getElementById('lshoulderpromext').value;
    var lshoulderpromabd = document.getElementById('lshoulderpromabd').value;
    var lshoulderpromer = document.getElementById('lshoulderpromer').value;
    var lshoulderpromir = document.getElementById('lshoulderpromir').value;

    //RIGHT SHOULDER MMT

    var rshouldermmtflex = document.getElementById('rshouldermmtflex').value;
    var rshouldermmtplusminusflex = document.getElementById('rshouldermmtplusminusflex').value;
    var rshouldermmtext = document.getElementById('rshouldermmtext').value;
    var rshouldermmtplusminusext = document.getElementById('rshouldermmtplusminusext').value;
    var rshouldermmtabd = document.getElementById('rshouldermmtabd').value;
    var rshouldermmtplusminusabd = document.getElementById('rshouldermmtplusminusabd').value;
    var rshouldermmter = document.getElementById('rshouldermmter').value;
    var rshouldermmtplusminuser = document.getElementById('rshouldermmtplusminuser').value;
    var rshouldermmtir = document.getElementById('rshouldermmtir').value;
    var rshouldermmtplusminusir = document.getElementById('rshouldermmtplusminusir').value;

    var rshoulderaromflex = document.getElementById('rshoulderaromflex').value;
    var rshoulderaromext = document.getElementById('rshoulderaromext').value;
    var rshoulderaromabd = document.getElementById('rshoulderaromabd').value;
    var rshoulderaromer = document.getElementById('rshoulderaromer').value;
    var rshoulderaromir = document.getElementById('rshoulderaromir').value;

    var rshoulderpromflex = document.getElementById('rshoulderpromflex').value;
    var rshoulderpromext = document.getElementById('rshoulderpromext').value;
    var rshoulderpromabd = document.getElementById('rshoulderpromabd').value;
    var rshoulderpromer = document.getElementById('rshoulderpromer').value;
    var rshoulderpromir = document.getElementById('rshoulderpromir').value;



    var tableData = [
        ["Location", subloc],
        ["Onset", subons],
        ["Mechanism of Injury", submoi],
        ["Aggravating Factors", subagg],
        ["Easing Factors", subeas],
        ["Imaging", subimg],
        ["Hobbies", subhob],
        ["Occupation", subocc]
    ];

    //ASSESSMENT VARIABLES



    //PLAN VARIABLES


    //styling

    


    function trimLineBreaks(value) {
        return value.replace(/^[\n\r]+|[\n\r]+$/g, '; ');
    }
    function hasUserInput(value) {
        return value.trim() !== '';
    }











//print functions

    //SUB PRINT











    if (hasUserInput(subtext)) {
        doc.setFont("courier", "bold");
        doc.setFontSize(22);
        doc.text("Subjective: ", 20, verticalposition);
        verticalposition += 8;
        doc.setFontSize(16);
        doc.setFont("courier", "normal");
        doc.text(subtext, 20, verticalposition, { maxWidth: 150 });
        verticalposition += 100;
    }

    if (hasUserInput(subpain)) {
        doc.setFont("courier", "bold");
        doc.text("Pain: ", 20, verticalposition);
        var pwidth = doc.getTextWidth('Pain: ');
        doc.setFont("courier", "normal");
        doc.text(subpain, pwidth + 20, verticalposition);
        verticalposition += 10;
    }


    if (hasUserInput(subloc)) {
        doc.setFont("courier", "bold");
        doc.text("Location: ", 20, verticalposition);
        var locwidth = doc.getTextWidth('Location: ');
        doc.setFont("courier", "normal");
        doc.text(subloc, locwidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subons)) {
        doc.setFont("courier", "bold");
        doc.text("Onset: ", 20, verticalposition);
        var onswidth = doc.getTextWidth('Onset: ');
        doc.setFont("courier", "normal");
        doc.text(subons, onswidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(submoi)) {
        doc.setFont("courier", "bold");
        doc.text("Mecahnism of Injury: ", 20, verticalposition);
        var moiwidth = doc.getTextWidth('Mechanism of Injury: ');
        doc.setFont("courier", "normal");
        doc.text(submoi, moiwidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subagg)) {
        doc.setFont("courier", "bold");
        doc.text("Aggravating Factors: ", 20, verticalposition);
        var aggwidth = doc.getTextWidth('Aggravating Factors: ');
        doc.setFont("courier", "normal");
        doc.text(subagg, aggwidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subeas)) {
        doc.setFont("courier", "bold");
        doc.text("Easing Factors: ", 20, verticalposition);
        var easwidth = doc.getTextWidth('Easing Factors: ');
        doc.setFont("courier", "normal");
        doc.text(subeas, easwidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subimg)) {
        doc.setFont("courier", "bold");
        doc.text("Imaging: ", 20, verticalposition);
        var imgwidth = doc.getTextWidth('Imaging: ');
        doc.setFont("courier", "normal");
        doc.text(subimg, imgwidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subhob)) {
        doc.setFont("courier", "bold");
        doc.text("Hobbies: ", 20, verticalposition);
        var hobwidth = doc.getTextWidth('Hobbies: ');
        doc.setFont("courier", "normal");
        doc.text(subhob, hobwidth + 20, verticalposition);
        verticalposition += 10;
    }

    if (hasUserInput(subocc)) {
        doc.setFont("courier", "bold");
        doc.text("Occupation: ", 20, verticalposition);
        var occwidth = doc.getTextWidth('Occupation: ');
        doc.setFont("courier", "normal");
        doc.text(subocc, occwidth + 20, verticalposition);
        verticalposition += 10;
    }





    //OBJ STYLE
    var shouldercheckbox = document.getElementById('shoulderobjselect');
    var elbowcheckbox = document.getElementById('elbowobjselect');
    var wristcheckbox = document.getElementById('wristobjselect');
    var hipcheckbox = document.getElementById('hipobjselect');
    var kneecheckbox = document.getElementById('kneeobjselect');
    var anklecheckbox = document.getElementById('ankleobjselect');
    var ctcheckbox = document.getElementById('ctobjselect');
    var lscheckbox = document.getElementById('lsobjselect');


    if (shouldercheckbox.checked) {
        doc.addPage();
        var verticalposition = 10;
        doc.setFont("courier", "bold");
        doc.text("Shoulder", 105, verticalposition, 'center');
        doc.setFont("courier", "normal");
        verticalposition += 10;









        //DISPLAYS L SHOULDER MMT IF ANY MMT INPUT IS PRESENT
        if (hasUserInput(lshouldermmtflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lshouldermmtext)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lshouldermmtabd)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lshouldermmter)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lshouldermmtir)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        

        //DISPLAYS R SHOULDER MMT IF ANY MMT INPUT IS PRESENT
        if (hasUserInput(rshouldermmtflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rshouldermmtext)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rshouldermmtabd)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rshouldermmter)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rshouldermmtir)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        


        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE L SHOULDER MMT MEASUREMENTS

        if (hasUserInput(lshouldermmtflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lshouldermmtflex + lshouldermmtplusminusflex.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lshouldermmtext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lshouldermmtext + lshouldermmtplusminusext.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lshouldermmtabd)) {
            doc.setFont("courier", "normal");
            doc.text("ABduction: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('ABduction: ');
            doc.setFont("courier", "bold");
            doc.text(lshouldermmtabd + lshouldermmtplusminusabd.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lshouldermmter)) {
            doc.setFont("courier", "normal");
            doc.text("External Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('External Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lshouldermmter + lshouldermmtplusminuser.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lshouldermmtir)) {
            doc.setFont("courier", "normal");
            doc.text("Internal Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Internal Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lshouldermmtir + lshouldermmtplusminusir.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }

        //POPULATE R SHOULDER MMT MEASUREMENTS

        if (hasUserInput(rshouldermmtflex)) {
            doc.setFont("courier", "bold");
            doc.text(rshouldermmtflex + rshouldermmtplusminusflex.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshouldermmtflex + rshouldermmtplusminusflex.trim() + '/5');
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rshouldermmtext)) {
            doc.setFont("courier", "bold");
            doc.text(rshouldermmtext + rshouldermmtplusminusext.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshouldermmtext + rshouldermmtplusminusext.trim() + '/5');
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rshouldermmtabd)) {
            doc.setFont("courier", "bold");
            doc.text(rshouldermmtabd + rshouldermmtplusminusabd.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshouldermmtabd + rshouldermmtplusminusabd.trim() + '/5');
            doc.setFont("courier", "normal");
            doc.text("ABduction: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rshouldermmter)) {
            doc.setFont("courier", "bold");
            doc.text(rshouldermmter + rshouldermmtplusminuser.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshouldermmter + rshouldermmtplusminuser.trim() + '/5');
            doc.setFont("courier", "normal");
            doc.text("External Rotation: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rshouldermmtir)) {
            doc.setFont("courier", "bold");
            doc.text(rshouldermmtir + rshouldermmtplusminusir.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshouldermmtir + rshouldermmtplusminusir.trim() + '/5');
            doc.setFont("courier", "normal");
            doc.text("Internal Rotation: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
















        //SET STARTING POSITION FOR AROM
      

        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 6, 190, verticalposition + 6);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition){
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }


        








        //SHOULDER AROM



















        //DISPLAYS L SHOULDER AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(lshoulderaromflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lshoulderaromext)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lshoulderaromabd)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lshoulderaromer)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lshoulderaromir)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }


        //DISPLAYS R SHOULDER AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(rshoulderaromflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rshoulderaromext)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rshoulderaromabd)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rshoulderaromer)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rshoulderaromir)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }


        doc.setFont("courier", "normal");
        doc.setFontSize(14);


















        //POPULATE L SHOULDER AROM MEASUREMENTS






















        if (hasUserInput(lshoulderaromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lshoulderaromflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lshoulderaromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lshoulderaromext + ' deg', 75, leftverticalposition); leftverticalposition += 5;
        }
        if (hasUserInput(lshoulderaromabd)) {
            doc.setFont("courier", "normal");
            doc.text("ABduction: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('ABduction: ');
            doc.setFont("courier", "bold");
            doc.text(lshoulderaromabd + ' deg', 75, leftverticalposition); leftverticalposition += 5;
        }
        if (hasUserInput(lshoulderaromer)) {
            doc.setFont("courier", "normal");
            doc.text("External Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('External Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lshoulderaromer + ' deg', 75, leftverticalposition); leftverticalposition += 5;
        }
        if (hasUserInput(lshoulderaromir)) {
            doc.setFont("courier", "normal");
            doc.text("Internal Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Internal Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lshoulderaromir + ' deg', 75, leftverticalposition); leftverticalposition += 5;
        }

        //POPULATE R SHOULDER AROM MEASUREMENTS

        if (hasUserInput(rshoulderaromflex)) {
            doc.setFont("courier", "bold");
            doc.text(rshoulderaromflex + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshoulderaromflex + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rshoulderaromext)) {
            doc.setFont("courier", "bold");
            doc.text(rshoulderaromext + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshoulderaromext + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rshoulderaromabd)) {
            doc.setFont("courier", "bold");
            doc.text(rshoulderaromabd + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshoulderaromabd + ' deg');
            doc.setFont("courier", "normal");
            doc.text("ABduction: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rshoulderaromer)) {
            doc.setFont("courier", "bold");
            doc.text(rshoulderaromer + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshoulderaromer + ' deg');
            doc.setFont("courier", "normal");
            doc.text("External Rotation: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rshoulderaromir)) {
            doc.setFont("courier", "bold");
            doc.text(rshoulderaromir + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshoulderaromir + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Internal Rotation: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }












        //SET STARTING POSITION FOR PROM

        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition){
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }


       







        //SHOULDER PROM



















        //DISPLAYS L SHOULDER PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(lshoulderpromflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lshoulderpromext)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lshoulderpromabd)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lshoulderpromer)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lshoulderpromir)) {
            doc.setFont("courier", "bold");
            doc.text("L Shoulder PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }


        //DISPLAYS R SHOULDER PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(rshoulderpromflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rshoulderpromext)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rshoulderpromabd)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rshoulderpromer)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rshoulderpromir)) {
            doc.setFont("courier", "bold");
            doc.text("R Shoulder PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }


        doc.setFont("courier", "normal");
        doc.setFontSize(14);


















        //POPULATE L SHOULDER PROM MEASUREMENTS






















        if (hasUserInput(lshoulderpromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lshoulderpromflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lshoulderpromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lshoulderpromext + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lshoulderpromabd)) {
            doc.setFont("courier", "normal");
            doc.text("ABduction: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('ABduction: ');
            doc.setFont("courier", "bold");
            doc.text(lshoulderpromabd + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lshoulderpromer)) {
            doc.setFont("courier", "normal");
            doc.text("External Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('External Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lshoulderpromer + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lshoulderpromir)) {
            doc.setFont("courier", "normal");
            doc.text("Internal Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Internal Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lshoulderpromir + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }

        //POPULATE R SHOULDER PROM MEASUREMENTS

        if (hasUserInput(rshoulderpromflex)) {
            doc.setFont("courier", "bold");
            doc.text(rshoulderpromflex + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshoulderpromflex + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rshoulderpromext)) {
            doc.setFont("courier", "bold");
            doc.text(rshoulderpromext + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshoulderpromext + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rshoulderpromabd)) {
            doc.setFont("courier", "bold");
            doc.text(rshoulderpromabd + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshoulderpromabd + ' deg');
            doc.setFont("courier", "normal");
            doc.text("ABduction: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rshoulderpromer)) {
            doc.setFont("courier", "bold");
            doc.text(rshoulderpromer + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshoulderpromer + ' deg');
            doc.setFont("courier", "normal");
            doc.text("External Rotation: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rshoulderpromir)) {
            doc.setFont("courier", "bold");
            doc.text(rshoulderpromir + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rshoulderpromir + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Internal Rotation: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }




        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition){
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }


      




        //DISPLAY OBSERVATION INPUT IF PRESENT


        if (hasUserInput(shoulderobservation)) {
            doc.setFont("courier", "bold");
            doc.text("Observation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Observation: ');
            var shoulderobservationwidth = doc.getTextWidth(shoulderobservation);
            doc.setFont("courier", "normal");
            var splitObservation = doc.splitTextToSize(shoulderobservation, 170 - labelwidth);
            doc.text(splitObservation, labelwidth + 20, verticalposition);
            if (shoulderobservationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5)
            }
            else if (shoulderobservationwidth < (170-labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10)
            }
            else if (shoulderobservationwidth < (170-labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15)
            }
            else if (shoulderobservationwidth < (170-labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20)
            }
            else if (shoulderobservationwidth < (170-labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25)
            }
            verticalposition += 10;
        }



        //DISPLAY PALPATION INFO


        if (hasUserInput(shoulderpalpation)) {
            doc.setFont("courier", "bold");
            doc.text("Palpation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Palpation: ');
            var shoulderpalpationwidth = doc.getTextWidth(shoulderpalpation);
            doc.setFont("courier", "normal");
            var splitPalpation = doc.splitTextToSize(shoulderpalpation, 170 - labelwidth);
            doc.text(splitPalpation, labelwidth + 20, verticalposition);
            if (shoulderpalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5)
            }
            else if (shoulderpalpationwidth < (170-labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10)
            }
            else if (shoulderpalpationwidth < (170-labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15)
            }
            else if (shoulderpalpationwidth < (170-labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20)
            }
            else if (shoulderpalpationwidth < (170-labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25)
            }
            
            verticalposition += 10;
        }





        //DISPLAY MOBILITY INPUT IF PRESENT


        if (hasUserInput(shouldermobility)) {
            doc.setFont("courier", "bold");
            doc.text("Mobility: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Mobility: ');
            var shouldermobilitywidth = doc.getTextWidth(shouldermobility);
            doc.setFont("courier", "normal");
            var splitMobility = doc.splitTextToSize(shouldermobility, 170 - labelwidth);
            doc.text(splitMobility, labelwidth + 20, verticalposition);
            if (shouldermobilitywidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5)
            }
            else if (shouldermobilitywidth < (170-labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10)
            }
            else if (shouldermobilitywidth < (170-labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15)
            }
            else if (shouldermobilitywidth < (170-labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20)
            }
            else if (shouldermobilitywidth < (170-labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25)
            }
            
            verticalposition += 10;
        }


        //DISPLAY SHOULDER SPECIAL TEST INPUT IF PRESENT


        if (hasUserInput(shoulderspecialtests)) {
            doc.setFont("courier", "bold");
            doc.text("Special Tests: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Special Tests: ');
            var shoulderspecialtestswidth = doc.getTextWidth(shoulderspecialtests);
            doc.setFont("courier", "normal");
            var splitShoulderspecialtests = doc.splitTextToSize(shoulderspecialtests, 170 - labelwidth);
            doc.text(splitShoulderspecialtests, labelwidth + 20, verticalposition);
            if (shoulderspecialtestswidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5)
            }
            else if (shoulderspecialtestswidth < (170-labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10)
            }
            else if (shoulderspecialtestswidth < (170-labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15)
            }
            else if (shoulderspecialtestswidth < (170-labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20)
            }
            else if (shoulderspecialtestswidth < (170-labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25)
            }
            
            verticalposition += 10;
        }






        //DISPLAY SHOULDER JOINT MOBILITY IF PRESENT







    }


























    /*
     
     
     
     
    doc.text("L shoulder flexion MMT: " + lshouldermmtflex + lshouldermmtplusminusflex + "/5", 20, verticalposition);
    verticalposition += 10;
     
    doc.text("L shoulder extension MMT: " + lshouldermmtext + lshouldermmtplusminusext + "/5", 20, verticalposition);
    verticalposition += 10;
     
    doc.text("L shoulder abduction MMT: " + lshouldermmtabd + lshouldermmtplusminusabd + "/5", 20, verticalposition);
    verticalposition += 10;
     
    doc.text("L shoulder external rotation MMT: " + lshouldermmter + lshouldermmtplusminuser + "/5", 20, verticalposition);
    verticalposition += 10;
     
    doc.text("L shoulder internal rotation MMT: " + lshouldermmtir + lshouldermmtplusminusir + "/5", 20, verticalposition);
    verticalposition += 10;
     
    doc.text("L shoulder flexion AROM: " + lshoulderaromflex, 20, verticalposition);
    verticalposition += 10;
     
    doc.text("L shoulder extension AROM: " + lshoulderaromext, 20, verticalposition);
    verticalposition += 10;
     
    doc.text("L shoulder abduction AROM: " + lshoulderaromabd, 20, verticalposition);
    verticalposition += 10;
     
    doc.text("L shoulder external rotation AROM: " + lshoulderaromer, 20, verticalposition);
    verticalposition += 10;
     
    doc.text("L shoulder internal rotation AROM: " + lshoulderaromir, 20, verticalposition);
    verticalposition += 10;
     
    }
     
    if (elbowcheckbox.checked) {
    doc.addPage();
     
    }
     
    if (wristcheckbox.checked) {
    doc.addPage();
     
    }
     
    if (hipcheckbox.checked) {
    doc.addPage();
     
    }
     
    if (kneecheckbox.checked) {
    doc.addPage();
     
    }
     
    if (anklecheckbox.checked) {
    doc.addPage();
     
    }
     
    if (ctcheckbox.checked) {
    doc.addPage();
     
    }
     
    if (lscheckbox.checked) {
    doc.addPage();
     
    }
    */


    doc.save("pteval.pdf")

} 