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














    /*SHOULDER VARIABLES*/{


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

    }

    /*ELBOW VARIABLES*/{

        //Observation/Palpation/Specialtests
        var untrimmedelbowobservation = document.getElementById('elbowobservation').value;
        var elbowobservation = trimLineBreaks(untrimmedelbowobservation);
        var elbowpalpation = document.getElementById('elbowpalpation').value;
        var elbowmobility = document.getElementById('elbowmobility').value;
        var elbowspecialtests = document.getElementById('elbowspecialtests').value;


        //LEFT ELBOW MMT
        var lelbowmmtflex = document.getElementById('lelbowmmtflex').value;
        var lelbowmmtplusminusflex = document.getElementById('lelbowmmtplusminusflex').value;
        var lelbowmmtext = document.getElementById('lelbowmmtext').value;
        var lelbowmmtplusminusext = document.getElementById('lelbowmmtplusminusext').value;


        //LEFT ELBOW AROM

        var lelbowaromflex = document.getElementById('lelbowaromflex').value;
        var lelbowaromext = document.getElementById('lelbowaromext').value;


        //LEFT ELBOW PROM

        var lelbowpromflex = document.getElementById('lelbowpromflex').value;
        var lelbowpromext = document.getElementById('lelbowpromext').value;


        //RIGHT ELBOW MMT

        var relbowmmtflex = document.getElementById('relbowmmtflex').value;
        var relbowmmtplusminusflex = document.getElementById('relbowmmtplusminusflex').value;
        var relbowmmtext = document.getElementById('relbowmmtext').value;
        var relbowmmtplusminusext = document.getElementById('relbowmmtplusminusext').value;


        var relbowaromflex = document.getElementById('relbowaromflex').value;
        var relbowaromext = document.getElementById('relbowaromext').value;


        var relbowpromflex = document.getElementById('relbowpromflex').value;
        var relbowpromext = document.getElementById('relbowpromext').value;

    }

    /*WRIST VARIABLES*/{


        //Observation/Palpation/Specialtests
        var untrimmedwristobservation = document.getElementById('wristobservation').value;
        var wristobservation = trimLineBreaks(untrimmedwristobservation);
        var wristpalpation = document.getElementById('wristpalpation').value;
        var wristmobility = document.getElementById('wristmobility').value;
        var wristspecialtests = document.getElementById('wristspecialtests').value;


        //LEFT WRIST MMT
        var lwristmmtflex = document.getElementById('lwristmmtflex').value;
        var lwristmmtplusminusflex = document.getElementById('lwristmmtplusminusflex').value;
        var lwristmmtext = document.getElementById('lwristmmtext').value;
        var lwristmmtplusminusext = document.getElementById('lwristmmtplusminusext').value;
        var lwristmmtraddev = document.getElementById('lwristmmtraddev').value;
        var lwristmmtplusminusraddev = document.getElementById('lwristmmtplusminusraddev').value;
        var lwristmmtulndev = document.getElementById('lwristmmtulndev').value;
        var lwristmmtplusminusulndev = document.getElementById('lwristmmtplusminusulndev').value;
        var lwristmmtpro = document.getElementById('lwristmmtpro').value;
        var lwristmmtplusminuspro = document.getElementById('lwristmmtplusminuspro').value;
        var lwristmmtsup = document.getElementById('lwristmmtsup').value;
        var lwristmmtplusminussup = document.getElementById('lwristmmtplusminussup').value;
        var lwristmmtgrip = document.getElementById('lwristmmtgrip').value;
        var lwristmmtplusminusgrip = document.getElementById('lwristmmtplusminusgrip').value;


        //LEFT WRIST AROM

        var lwristaromflex = document.getElementById('lwristaromflex').value;
        var lwristaromext = document.getElementById('lwristaromext').value;
        var lwristaromraddev = document.getElementById('lwristaromraddev').value;
        var lwristaromulndev = document.getElementById('lwristaromulndev').value;
        var lwristarompro = document.getElementById('lwristarompro').value;
        var lwristaromsup = document.getElementById('lwristaromsup').value;

        //LEFT WRIST PROM

        var lwristpromflex = document.getElementById('lwristpromflex').value;
        var lwristpromext = document.getElementById('lwristpromext').value;
        var lwristpromraddev = document.getElementById('lwristpromraddev').value;
        var lwristpromulndev = document.getElementById('lwristpromulndev').value;
        var lwristprompro = document.getElementById('lwristprompro').value;
        var lwristpromsup = document.getElementById('lwristpromsup').value;


        //RIGHT WRIST MMT
        var rwristmmtflex = document.getElementById('rwristmmtflex').value;
        var rwristmmtplusminusflex = document.getElementById('rwristmmtplusminusflex').value;
        var rwristmmtext = document.getElementById('rwristmmtext').value;
        var rwristmmtplusminusext = document.getElementById('rwristmmtplusminusext').value;
        var rwristmmtraddev = document.getElementById('rwristmmtraddev').value;
        var rwristmmtplusminusraddev = document.getElementById('rwristmmtplusminusraddev').value;
        var rwristmmtulndev = document.getElementById('rwristmmtulndev').value;
        var rwristmmtplusminusulndev = document.getElementById('rwristmmtplusminusulndev').value;
        var rwristmmtpro = document.getElementById('rwristmmtpro').value;
        var rwristmmtplusminuspro = document.getElementById('rwristmmtplusminuspro').value;
        var rwristmmtsup = document.getElementById('rwristmmtsup').value;
        var rwristmmtplusminussup = document.getElementById('rwristmmtplusminussup').value;
        var rwristmmtgrip = document.getElementById('rwristmmtgrip').value;
        var rwristmmtplusminusgrip = document.getElementById('rwristmmtplusminusgrip').value;


        //RIGHT WRIST AROM

        var rwristaromflex = document.getElementById('rwristaromflex').value;
        var rwristaromext = document.getElementById('rwristaromext').value;
        var rwristaromraddev = document.getElementById('rwristaromraddev').value;
        var rwristaromulndev = document.getElementById('rwristaromulndev').value;
        var rwristarompro = document.getElementById('rwristarompro').value;
        var rwristaromsup = document.getElementById('rwristaromsup').value;


        //RIGHT WRIST PROM

        var rwristpromflex = document.getElementById('rwristpromflex').value;
        var rwristpromext = document.getElementById('rwristpromext').value;
        var rwristpromraddev = document.getElementById('rwristpromraddev').value;
        var rwristpromulndev = document.getElementById('rwristpromulndev').value;
        var rwristprompro = document.getElementById('rwristprompro').value;
        var rwristpromsup = document.getElementById('rwristpromsup').value;


    }


    /*HIP VARIABLES*/{


        //Observation/Palpation/Specialtests
        var untrimmedhipobservation = document.getElementById('hipobservation').value;
        var hipobservation = trimLineBreaks(untrimmedhipobservation);
        var hippalpation = document.getElementById('hippalpation').value;
        var hipmobility = document.getElementById('hipmobility').value;
        var hipspecialtests = document.getElementById('hipspecialtests').value;


        //LEFT HIP MMT
        var lhipmmtflex = document.getElementById('lhipmmtflex').value;
        var lhipmmtplusminusflex = document.getElementById('lhipmmtplusminusflex').value;
        var lhipmmtext = document.getElementById('lhipmmtext').value;
        var lhipmmtplusminusext = document.getElementById('lhipmmtplusminusext').value;
        var lhipmmtabd = document.getElementById('lhipmmtabd').value;
        var lhipmmtplusminusabd = document.getElementById('lhipmmtplusminusabd').value;
        var lhipmmter = document.getElementById('lhipmmter').value;
        var lhipmmtplusminuser = document.getElementById('lhipmmtplusminuser').value;
        var lhipmmtir = document.getElementById('lhipmmtir').value;
        var lhipmmtplusminusir = document.getElementById('lhipmmtplusminusir').value;

        //LEFT HIP AROM

        var lhiparomflex = document.getElementById('lhiparomflex').value;
        var lhiparomext = document.getElementById('lhiparomext').value;
        var lhiparomabd = document.getElementById('lhiparomabd').value;
        var lhiparomer = document.getElementById('lhiparomer').value;
        var lhiparomir = document.getElementById('lhiparomir').value;

        //LEFT HIP PROM

        var lhippromflex = document.getElementById('lhippromflex').value;
        var lhippromext = document.getElementById('lhippromext').value;
        var lhippromabd = document.getElementById('lhippromabd').value;
        var lhippromer = document.getElementById('lhippromer').value;
        var lhippromir = document.getElementById('lhippromir').value;

        //RIGHT HIP MMT

        var rhipmmtflex = document.getElementById('rhipmmtflex').value;
        var rhipmmtplusminusflex = document.getElementById('rhipmmtplusminusflex').value;
        var rhipmmtext = document.getElementById('rhipmmtext').value;
        var rhipmmtplusminusext = document.getElementById('rhipmmtplusminusext').value;
        var rhipmmtabd = document.getElementById('rhipmmtabd').value;
        var rhipmmtplusminusabd = document.getElementById('rhipmmtplusminusabd').value;
        var rhipmmter = document.getElementById('rhipmmter').value;
        var rhipmmtplusminuser = document.getElementById('rhipmmtplusminuser').value;
        var rhipmmtir = document.getElementById('rhipmmtir').value;
        var rhipmmtplusminusir = document.getElementById('rhipmmtplusminusir').value;

        var rhiparomflex = document.getElementById('rhiparomflex').value;
        var rhiparomext = document.getElementById('rhiparomext').value;
        var rhiparomabd = document.getElementById('rhiparomabd').value;
        var rhiparomer = document.getElementById('rhiparomer').value;
        var rhiparomir = document.getElementById('rhiparomir').value;

        var rhippromflex = document.getElementById('rhippromflex').value;
        var rhippromext = document.getElementById('rhippromext').value;
        var rhippromabd = document.getElementById('rhippromabd').value;
        var rhippromer = document.getElementById('rhippromer').value;
        var rhippromir = document.getElementById('rhippromir').value;

    }


    /*KNEE VARIABLES*/{

        //Observation/Palpation/Specialtests
        var untrimmedkneeobservation = document.getElementById('kneeobservation').value;
        var kneeobservation = trimLineBreaks(untrimmedkneeobservation);
        var kneepalpation = document.getElementById('kneepalpation').value;
        var kneemobility = document.getElementById('kneemobility').value;
        var kneespecialtests = document.getElementById('kneespecialtests').value;


        //LEFT KNEE MMT
        var lkneemmtflex = document.getElementById('lkneemmtflex').value;
        var lkneemmtplusminusflex = document.getElementById('lkneemmtplusminusflex').value;
        var lkneemmtext = document.getElementById('lkneemmtext').value;
        var lkneemmtplusminusext = document.getElementById('lkneemmtplusminusext').value;


        //LEFT KNEE AROM

        var lkneearomflex = document.getElementById('lkneearomflex').value;
        var lkneearomext = document.getElementById('lkneearomext').value;


        //LEFT KNEE PROM

        var lkneepromflex = document.getElementById('lkneepromflex').value;
        var lkneepromext = document.getElementById('lkneepromext').value;


        //RIGHT KNEE MMT

        var rkneemmtflex = document.getElementById('rkneemmtflex').value;
        var rkneemmtplusminusflex = document.getElementById('rkneemmtplusminusflex').value;
        var rkneemmtext = document.getElementById('rkneemmtext').value;
        var rkneemmtplusminusext = document.getElementById('rkneemmtplusminusext').value;


        var rkneearomflex = document.getElementById('rkneearomflex').value;
        var rkneearomext = document.getElementById('rkneearomext').value;


        var rkneepromflex = document.getElementById('rkneepromflex').value;
        var rkneepromext = document.getElementById('rkneepromext').value;

    }



    /*ANKLE VARIABLES*/{


        //Observation/Palpation/Specialtests
        var untrimmedankleobservation = document.getElementById('ankleobservation').value;
        var ankleobservation = trimLineBreaks(untrimmedankleobservation);
        var anklepalpation = document.getElementById('anklepalpation').value;
        var anklemobility = document.getElementById('anklemobility').value;
        var anklespecialtests = document.getElementById('anklespecialtests').value;


        //LEFT ANKLE MMT
        var lanklemmtdflex = document.getElementById('lanklemmtdflex').value;
        var lanklemmtplusminusdflex = document.getElementById('lanklemmtplusminusdflex').value;
        var lanklemmtpflex = document.getElementById('lanklemmtpflex').value;
        var lanklemmtplusminuspflex = document.getElementById('lanklemmtplusminuspflex').value;
        var lanklemmtinv = document.getElementById('lanklemmtinv').value;
        var lanklemmtplusminusinv = document.getElementById('lanklemmtplusminusinv').value;
        var lanklemmtev = document.getElementById('lanklemmtev').value;
        var lanklemmtplusminusev = document.getElementById('lanklemmtplusminusev').value;



        //LEFT ANKLE AROM

        var lanklearomdflex = document.getElementById('lanklearomdflex').value;
        var lanklearompflex = document.getElementById('lanklearompflex').value;
        var lanklearominv = document.getElementById('lanklearominv').value;
        var lanklearomev = document.getElementById('lanklearomev').value;


        //LEFT ANKLE PROM

        var lanklepromdflex = document.getElementById('lanklepromdflex').value;
        var lankleprompflex = document.getElementById('lankleprompflex').value;
        var lankleprominv = document.getElementById('lankleprominv').value;
        var lanklepromev = document.getElementById('lanklepromev').value;



        //RIGHT ANKLE MMT
        var ranklemmtdflex = document.getElementById('ranklemmtdflex').value;
        var ranklemmtplusminusdflex = document.getElementById('ranklemmtplusminusdflex').value;
        var ranklemmtpflex = document.getElementById('ranklemmtpflex').value;
        var ranklemmtplusminuspflex = document.getElementById('ranklemmtplusminuspflex').value;
        var ranklemmtinv = document.getElementById('ranklemmtinv').value;
        var ranklemmtplusminusinv = document.getElementById('ranklemmtplusminusinv').value;
        var ranklemmtev = document.getElementById('ranklemmtev').value;
        var ranklemmtplusminusev = document.getElementById('ranklemmtplusminusev').value;



        //LEFT ANKLE AROM

        var ranklearomdflex = document.getElementById('ranklearomdflex').value;
        var ranklearompflex = document.getElementById('ranklearompflex').value;
        var ranklearominv = document.getElementById('ranklearominv').value;
        var ranklearomev = document.getElementById('ranklearomev').value;


        //LEFT ANKLE PROM

        var ranklepromdflex = document.getElementById('ranklepromdflex').value;
        var rankleprompflex = document.getElementById('rankleprompflex').value;
        var rankleprominv = document.getElementById('rankleprominv').value;
        var ranklepromev = document.getElementById('ranklepromev').value;


    }


    /*CERVICOTHORACIC VARIABLES*/{


        //Observation/Palpation/Specialtests
        var untrimmedctobservation = document.getElementById('ctobservation').value;
        var ctobservation = trimLineBreaks(untrimmedctobservation);
        var ctpalpation = document.getElementById('ctpalpation').value;
        var ctmobility = document.getElementById('ctmobility').value;
        var ctspecialtests = document.getElementById('ctspecialtests').value;


        //LEFT CT MMT
        var ctmmtflex = document.getElementById('ctmmtflex').value;
        var ctmmtplusminusflex = document.getElementById('ctmmtplusminusflex').value;
        var ctmmtext = document.getElementById('ctmmtext').value;
        var ctmmtplusminusext = document.getElementById('ctmmtplusminusext').value;
        var ctmmtrrot = document.getElementById('ctmmtrrot').value;
        var ctmmtplusminusrrot = document.getElementById('ctmmtplusminusrrot').value;
        var ctmmtlrot = document.getElementById('ctmmtlrot').value;
        var ctmmtplusminuslrot = document.getElementById('ctmmtplusminuslrot').value;
        var ctmmtrsb = document.getElementById('ctmmtrsb').value;
        var ctmmtplusminusrsb = document.getElementById('ctmmtplusminusrsb').value;
        var ctmmtlsb = document.getElementById('ctmmtlsb').value;
        var ctmmtplusminuslsb = document.getElementById('ctmmtplusminuslsb').value;

        //LEFT CT AROM

        var ctaromflex = document.getElementById('ctaromflex').value;
        var ctaromext = document.getElementById('ctaromext').value;
        var ctaromrrot = document.getElementById('ctaromrrot').value;
        var ctaromlrot = document.getElementById('ctaromlrot').value;
        var ctaromrsb = document.getElementById('ctaromrsb').value;
        var ctaromlsb = document.getElementById('ctaromlsb').value;

        //LEFT CT PROM

        var ctpromflex = document.getElementById('ctpromflex').value;
        var ctpromext = document.getElementById('ctpromext').value;
        var ctpromrrot = document.getElementById('ctpromrrot').value;
        var ctpromlrot = document.getElementById('ctpromlrot').value;
        var ctpromrsb = document.getElementById('ctpromrsb').value;
        var ctpromlsb = document.getElementById('ctpromlsb').value;


    }

    /*LUMBOSACRAL VARIABLES*/{


        //Observation/Palpation/Specialtests
        var untrimmedlsobservation = document.getElementById('lsobservation').value;
        var lsobservation = trimLineBreaks(untrimmedlsobservation);
        var lspalpation = document.getElementById('lspalpation').value;
        var lsmobility = document.getElementById('lsmobility').value;
        var lsspecialtests = document.getElementById('lsspecialtests').value;


        //LEFT LS MMT
        var lsmmtflex = document.getElementById('lsmmtflex').value;
        var lsmmtplusminusflex = document.getElementById('lsmmtplusminusflex').value;
        var lsmmtext = document.getElementById('lsmmtext').value;
        var lsmmtplusminusext = document.getElementById('lsmmtplusminusext').value;
        var lsmmtrrot = document.getElementById('lsmmtrrot').value;
        var lsmmtplusminusrrot = document.getElementById('lsmmtplusminusrrot').value;
        var lsmmtlrot = document.getElementById('lsmmtlrot').value;
        var lsmmtplusminuslrot = document.getElementById('lsmmtplusminuslrot').value;
        var lsmmtrsb = document.getElementById('lsmmtrsb').value;
        var lsmmtplusminusrsb = document.getElementById('lsmmtplusminusrsb').value;
        var lsmmtlsb = document.getElementById('lsmmtlsb').value;
        var lsmmtplusminuslsb = document.getElementById('lsmmtplusminuslsb').value;

        //LEFT LS AROM

        var lsaromflex = document.getElementById('lsaromflex').value;
        var lsaromext = document.getElementById('lsaromext').value;
        var lsaromrrot = document.getElementById('lsaromrrot').value;
        var lsaromlrot = document.getElementById('lsaromlrot').value;
        var lsaromrsb = document.getElementById('lsaromrsb').value;
        var lsaromlsb = document.getElementById('lsaromlsb').value;

        //LEFT LS PROM

        var lspromflex = document.getElementById('lspromflex').value;
        var lspromext = document.getElementById('lspromext').value;
        var lspromrrot = document.getElementById('lspromrrot').value;
        var lspromlrot = document.getElementById('lspromlrot').value;
        var lspromrsb = document.getElementById('lspromrsb').value;
        var lspromlsb = document.getElementById('lspromlsb').value;


    }

    /*ASSESSMENT VARIABLES*/{
        var impairments = document.getElementById('impairments').value;
        var limitations = document.getElementById('limitations').value;
        var assessmenttext = document.getElementById('assessmenttext').value;
    }



/*PLAN VARIABLES*/{
    var planfrequency = document.getElementById('planfrequency').value;
    var planduration = document.getElementById('planduration').value;

}

    //styling




    function trimLineBreaks(value) {
        return value.replace(/\n/g, '; ');
    }
    function hasUserInput(value) {
        return value.trim() !== '';
    }











    //print functions

    //SUB PRINT









/*SUBJECTIVE*/{

        if (hasUserInput(subtext)) {
            doc.setFont("courier", "bold");
            doc.setFontSize(22);
            doc.text("Subjective: ", 20, verticalposition);
            verticalposition += 8;
            doc.setFontSize(16);
            doc.setFont("courier", "normal");
            var splitsubtext = doc.splitTextToSize(trimLineBreaks(subtext));
            doc.text(splitsubtext, 20, verticalposition, { maxWidth: 150 });
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
            var splitsubloc = doc.splitTextToSize(trimLineBreaks(subloc), 170 - locwidth);
            doc.text(splitsubloc, locwidth + 20, verticalposition);
            var sublocwidth = doc.getTextWidth(subloc);
            if (sublocwidth < 170 - locwidth) {
                verticalposition += 10;
            }
            else if (sublocwidth < (170 - locwidth) * 2) {
                verticalposition += 20;
            }
            else if (sublocwidth < (170 - locwidth) * 3) {
                verticalposition += 25;
            }
            else if (sublocwidth < (170 - locwidth) * 4) {
                verticalposition += 30;
            }
            else if (sublocwidth < (170 - locwidth) * 5) {
                verticalposition += 35;
            }
        }

        if (hasUserInput(subons)) {
            doc.setFont("courier", "bold");
            doc.text("Onset: ", 20, verticalposition);
            var onswidth = doc.getTextWidth('Onset: ');
            doc.setFont("courier", "normal");
            var splitsubons = doc.splitTextToSize(trimLineBreaks(subons), 170 - onswidth);
            doc.text(splitsubons, onswidth + 20, verticalposition);
            var subonswidth = doc.getTextWidth(subons);
            if (subonswidth < 170 - onswidth) {
                verticalposition += 10;
            }
            else if (subonswidth < (170 - onswidth) * 2) {
                verticalposition += 20;
            }
            else if (subonswidth < (170 - onswidth) * 3) {
                verticalposition += 25;
            }
            else if (subonswidth < (170 - onswidth) * 4) {
                verticalposition += 30;
            }
            else if (subonswidth < (170 - onswidth) * 5) {
                verticalposition += 35;
            }
        }

        if (hasUserInput(submoi)) {
            doc.setFont("courier", "bold");
            doc.text("Mecahnism of Injury: ", 20, verticalposition);
            var moiwidth = doc.getTextWidth('Mechanism of Injury: ');
            doc.setFont("courier", "normal");
            var splitsubmoi = doc.splitTextToSize(trimLineBreaks(submoi), 170 - moiwidth);
            doc.text(splitsubmoi, moiwidth + 20, verticalposition);
            var submoiwidth = doc.getTextWidth(submoi);
            if (submoiwidth < 170 - moiwidth) {
                verticalposition += 10;
            }
            else if (submoiwidth < (170 - moiwidth) * 2) {
                verticalposition += 20;
            }
            else if (submoiwidth < (170 - moiwidth) * 3) {
                verticalposition += 25;
            }
            else if (submoiwidth < (170 - moiwidth) * 4) {
                verticalposition += 30;
            }
            else if (submoiwidth < (170 - moiwidth) * 5) {
                verticalposition += 35;
            }
        }

        if (hasUserInput(subagg)) {
            doc.setFont("courier", "bold");
            doc.text("Aggravating Factors: ", 20, verticalposition);
            var aggwidth = doc.getTextWidth('Aggravating Factors: ');
            doc.setFont("courier", "normal");
            var splitsubagg = doc.splitTextToSize(trimLineBreaks(subagg), 170 - aggwidth);
            doc.text(splitsubagg, aggwidth + 20, verticalposition);
            var subaggwidth = doc.getTextWidth(subagg);
            if (subaggwidth < 170 - aggwidth) {
                verticalposition += 10;
            }
            else if (subaggwidth < (170 - aggwidth) * 2) {
                verticalposition += 20;
            }
            else if (subaggwidth < (170 - aggwidth) * 3) {
                verticalposition += 25;
            }
            else if (subaggwidth < (170 - aggwidth) * 4) {
                verticalposition += 30;
            }
            else if (subaggwidth < (170 - aggwidth) * 5) {
                verticalposition += 35;
            }
        }

        if (hasUserInput(subeas)) {
            doc.setFont("courier", "bold");
            doc.text("Easing Factors: ", 20, verticalposition);
            var easwidth = doc.getTextWidth('Easing Factors: ');
            doc.setFont("courier", "normal");
            var splitsubeas = doc.splitTextToSize(trimLineBreaks(subeas), 170 - easwidth);
            doc.text(splitsubeas, easwidth + 20, verticalposition);
            var subeaswidth = doc.getTextWidth(subeas);
            if (subeaswidth < 170 - easwidth) {
                verticalposition += 10;
            }
            else if (subeaswidth < (170 - easwidth) * 2) {
                verticalposition += 20;
            }
            else if (subeaswidth < (170 - easwidth) * 3) {
                verticalposition += 25;
            }
            else if (subeaswidth < (170 - easwidth) * 4) {
                verticalposition += 30;
            }
            else if (subeaswidth < (170 - easwidth) * 5) {
                verticalposition += 35;
            }
        }

        if (hasUserInput(subimg)) {
            doc.setFont("courier", "bold");
            doc.text("Imaging: ", 20, verticalposition);
            var imgwidth = doc.getTextWidth('Imaging: ');
            doc.setFont("courier", "normal");
            var splitsubimg = doc.splitTextToSize(trimLineBreaks(subimg), 170 - imgwidth);
            doc.text(splitsubimg, imgwidth + 20, verticalposition);
            var subimgwidth = doc.getTextWidth(subimg);
            if (subimgwidth < 170 - imgwidth) {
                verticalposition += 10;
            }
            else if (subimgwidth < (170 - imgwidth) * 2) {
                verticalposition += 20;
            }
            else if (subimgwidth < (170 - imgwidth) * 3) {
                verticalposition += 25;
            }
            else if (subimgwidth < (170 - imgwidth) * 4) {
                verticalposition += 30;
            }
            else if (subimgwidth < (170 - imgwidth) * 5) {
                verticalposition += 35;
            }
        }

        if (hasUserInput(subhob)) {
            doc.setFont("courier", "bold");
            doc.text("Hobbies: ", 20, verticalposition);
            var hobwidth = doc.getTextWidth('Hobbies: ');
            doc.setFont("courier", "normal");
            var splitsubhob = doc.splitTextToSize(trimLineBreaks(subhob), 170 - hobwidth);
            doc.text(splitsubhob, hobwidth + 20, verticalposition);
            var subhobwidth = doc.getTextWidth(subhob);
            if (subhobwidth < 170 - hobwidth) {
                verticalposition += 10;
            }
            else if (subhobwidth < (170 - hobwidth) * 2) {
                verticalposition += 20;
            }
            else if (subhobwidth < (170 - hobwidth) * 3) {
                verticalposition += 25;
            }
            else if (subhobwidth < (170 - hobwidth) * 4) {
                verticalposition += 30;
            }
            else if (subhobwidth < (170 - hobwidth) * 5) {
                verticalposition += 35;
            }
        }

        if (hasUserInput(subocc)) {
            doc.setFont("courier", "bold");
            doc.text("Occupation: ", 20, verticalposition);
            var occwidth = doc.getTextWidth('Occupation: ');
            doc.setFont("courier", "normal");
            var splitsubocc = doc.splitTextToSize(trimLineBreaks(subocc), 170 - occwidth);
            doc.text(splitsubocc, occwidth + 20, verticalposition);
            var suboccwidth = doc.getTextWidth(subocc);
            if (suboccwidth < 170 - occwidth) {
                verticalposition += 10;
            }
            else if (suboccwidth < (170 - occwidth) * 2) {
                verticalposition += 20;
            }
            else if (suboccwidth < (170 - occwidth) * 3) {
                verticalposition += 25;
            }
            else if (suboccwidth < (170 - occwidth) * 4) {
                verticalposition += 30;
            }
            else if (suboccwidth < (170 - occwidth) * 5) {
                verticalposition += 35;
            }
        }
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





























    //SHOULDER OBJECTIVE
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
        else if (rightverticalposition < leftverticalposition) {
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
        else if (rightverticalposition < leftverticalposition) {
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
        else if (rightverticalposition < leftverticalposition) {
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
            var splitObservation = doc.splitTextToSize(trimLineBreaks(shoulderobservation), 170 - labelwidth);
            doc.text(splitObservation, labelwidth + 20, verticalposition);
            if (shoulderobservationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (shoulderobservationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (shoulderobservationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (shoulderobservationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (shoulderobservationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }



        //DISPLAY PALPATION INFO


        if (hasUserInput(shoulderpalpation)) {
            doc.setFont("courier", "bold");
            doc.text("Palpation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Palpation: ');
            var shoulderpalpationwidth = doc.getTextWidth(shoulderpalpation);
            doc.setFont("courier", "normal");
            var splitPalpation = doc.splitTextToSize(trimLineBreaks(shoulderpalpation), 170 - labelwidth);
            doc.text(splitPalpation, labelwidth + 20, verticalposition);
            if (shoulderpalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (shoulderpalpationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (shoulderpalpationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (shoulderpalpationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (shoulderpalpationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }

        }





        //DISPLAY MOBILITY INPUT IF PRESENT


        if (hasUserInput(shouldermobility)) {
            doc.setFont("courier", "bold");
            doc.text("Mobility: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Mobility: ');
            var shouldermobilitywidth = doc.getTextWidth(shouldermobility);
            doc.setFont("courier", "normal");
            var splitMobility = doc.splitTextToSize(trimLineBreaks(shouldermobility), 170 - labelwidth);
            doc.text(splitMobility, labelwidth + 20, verticalposition);
            if (shouldermobilitywidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (shouldermobilitywidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (shouldermobilitywidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (shouldermobilitywidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (shouldermobilitywidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }


        //DISPLAY SHOULDER SPECIAL TEST INPUT IF PRESENT


        if (hasUserInput(shoulderspecialtests)) {
            doc.setFont("courier", "bold");
            doc.text("Special Tests: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Special Tests: ');
            var shoulderspecialtestswidth = doc.getTextWidth(shoulderspecialtests);
            doc.setFont("courier", "normal");
            var splitShoulderspecialtests = doc.splitTextToSize(trimLineBreaks(shoulderspecialtests), 170 - labelwidth);
            doc.text(splitShoulderspecialtests, labelwidth + 20, verticalposition);
            if (shoulderpalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (shoulderspecialtestswidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (shoulderspecialtestswidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (shoulderspecialtestswidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (shoulderspecialtestswidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }






        //DISPLAY SHOULDER JOINT MOBILITY IF PRESENT







    }













    //ELBOW OBJECTIVE
    if (elbowcheckbox.checked) {
        doc.addPage();
        var verticalposition = 10;
        doc.setFont("courier", "bold");
        doc.text("Elbow", 105, verticalposition, 'center');
        doc.setFont("courier", "normal");
        verticalposition += 10;

        if (hasUserInput(lelbowmmtflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Elbow MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lelbowmmtext)) {
            doc.setFont("courier", "bold");
            doc.text("L Elbow MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }



        //DISPLAYS R ELBOW MMT IF ANY MMT INPUT IS PRESENT
        if (hasUserInput(relbowmmtflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Elbow MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(relbowmmtext)) {
            doc.setFont("courier", "bold");
            doc.text("R Elbow MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }




        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE L ELBOW MMT MEASUREMENTS

        if (hasUserInput(lelbowmmtflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lelbowmmtflex + lelbowmmtplusminusflex.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lelbowmmtext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lelbowmmtext + lelbowmmtplusminusext.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }


        //POPULATE R ELBOW MMT MEASUREMENTS

        if (hasUserInput(relbowmmtflex)) {
            doc.setFont("courier", "bold");
            doc.text(relbowmmtflex + relbowmmtplusminusflex.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(relbowmmtflex + relbowmmtplusminusflex.trim() + '/5');
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(relbowmmtext)) {
            doc.setFont("courier", "bold");
            doc.text(relbowmmtext + relbowmmtplusminusext.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(relbowmmtext + relbowmmtplusminusext.trim() + '/5');
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }

















        //SET STARTING POSITION FOR AROM


        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 6, 190, verticalposition + 6);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }











        //ELBOW AROM



















        //DISPLAYS L ELBOW AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(lelbowaromflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Elbow AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lelbowaromext)) {
            doc.setFont("courier", "bold");
            doc.text("L Elbow AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }



        //DISPLAYS R ELBOW AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(relbowaromflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Elbow AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(relbowaromext)) {
            doc.setFont("courier", "bold");
            doc.text("R Elbow AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }





        doc.setFont("courier", "normal");
        doc.setFontSize(14);


















        //POPULATE L ELBOW AROM MEASUREMENTS






















        if (hasUserInput(lelbowaromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lelbowaromflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lelbowaromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lelbowaromext + ' deg', 75, leftverticalposition); leftverticalposition += 5;
        }




        //POPULATE R ELBOW AROM MEASUREMENTS





        if (hasUserInput(relbowaromflex)) {
            doc.setFont("courier", "bold");
            doc.text(relbowaromflex + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(relbowaromflex + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(relbowaromext)) {
            doc.setFont("courier", "bold");
            doc.text(relbowaromext + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(relbowaromext + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }











        //SET STARTING POSITION FOR PROM

        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }










        //ELBOW PROM



















        //DISPLAYS L ELBOW PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(lelbowpromflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Elbow PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lelbowpromext)) {
            doc.setFont("courier", "bold");
            doc.text("L Elbow PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }






        //DISPLAYS R ELBOW PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(relbowpromflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Elbow PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(relbowpromext)) {
            doc.setFont("courier", "bold");
            doc.text("R Elbow PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }





        doc.setFont("courier", "normal");
        doc.setFontSize(14);


















        //POPULATE L ELBOW PROM MEASUREMENTS






















        if (hasUserInput(lelbowpromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lelbowpromflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lelbowpromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lelbowpromext + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }





        //POPULATE R ELBOW PROM MEASUREMENTS






        if (hasUserInput(relbowpromflex)) {
            doc.setFont("courier", "bold");
            doc.text(relbowpromflex + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(relbowpromflex + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(relbowpromext)) {
            doc.setFont("courier", "bold");
            doc.text(relbowpromext + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(relbowpromext + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }







        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }







        //DISPLAY OBSERVATION INPUT IF PRESENT


        if (hasUserInput(elbowobservation)) {
            doc.setFont("courier", "bold");
            doc.text("Observation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Observation: ');
            var elbowobservationwidth = doc.getTextWidth(elbowobservation);
            doc.setFont("courier", "normal");
            var splitObservation = doc.splitTextToSize(trimLineBreaks(elbowobservation), 170 - labelwidth);
            doc.text(splitObservation, labelwidth + 20, verticalposition);
            if (elbowobservationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (elbowobservationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (elbowobservationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (elbowobservationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (elbowobservationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }



        //DISPLAY PALPATION INFO


        if (hasUserInput(elbowpalpation)) {
            doc.setFont("courier", "bold");
            doc.text("Palpation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Palpation: ');
            var elbowpalpationwidth = doc.getTextWidth(elbowpalpation);
            doc.setFont("courier", "normal");
            var splitPalpation = doc.splitTextToSize(trimLineBreaks(elbowpalpation), 170 - labelwidth);
            doc.text(splitPalpation, labelwidth + 20, verticalposition);
            if (elbowpalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (elbowpalpationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (elbowpalpationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (elbowpalpationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (elbowpalpationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }

        }





        //DISPLAY MOBILITY INPUT IF PRESENT


        if (hasUserInput(elbowmobility)) {
            doc.setFont("courier", "bold");
            doc.text("Mobility: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Mobility: ');
            var elbowmobilitywidth = doc.getTextWidth(elbowmobility);
            doc.setFont("courier", "normal");
            var splitMobility = doc.splitTextToSize(trimLineBreaks(elbowmobility), 170 - labelwidth);
            doc.text(splitMobility, labelwidth + 20, verticalposition);
            if (elbowmobilitywidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (elbowmobilitywidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (elbowmobilitywidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (elbowmobilitywidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (elbowmobilitywidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }


        //DISPLAY ELBOW SPECIAL TEST INPUT IF PRESENT


        if (hasUserInput(elbowspecialtests)) {
            doc.setFont("courier", "bold");
            doc.text("Special Tests: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Special Tests: ');
            var elbowspecialtestswidth = doc.getTextWidth(elbowspecialtests);
            doc.setFont("courier", "normal");
            var splitElbowspecialtests = doc.splitTextToSize(trimLineBreaks(elbowspecialtests), 170 - labelwidth);
            doc.text(splitElbowspecialtests, labelwidth + 20, verticalposition);
            if (elbowpalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (elbowspecialtestswidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (elbowspecialtestswidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (elbowspecialtestswidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (elbowspecialtestswidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }






        }




    }











    //WRIST OBJECTIVE
    if (wristcheckbox.checked) {
        doc.addPage();
        var verticalposition = 10;
        doc.setFont("courier", "bold");
        doc.text("Wrist", 105, verticalposition, 'center');
        doc.setFont("courier", "normal");
        verticalposition += 10;









        //DISPLAYS L WRIST MMT IF ANY MMT INPUT IS PRESENT
        if (hasUserInput(lwristmmtflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristmmtext)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristmmtulndev)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristmmtraddev)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristmmtpro)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristmmtsup)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristmmtgrip)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }


        //DISPLAYS R WRIST MMT IF ANY MMT INPUT IS PRESENT
        if (hasUserInput(rwristmmtflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist MMT", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristmmtext)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist MMT", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristmmtulndev)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist MMT", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristmmtraddev)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist MMT", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristmmtpro)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist MMT", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristmmtsup)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist MMT", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristmmtgrip)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist MMT", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }



        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE L WRIST MMT MEASUREMENTS

        if (hasUserInput(lwristmmtflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lwristmmtflex + lwristmmtplusminusflex.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristmmtext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lwristmmtext + lwristmmtplusminusext.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristmmtraddev)) {
            doc.setFont("courier", "normal");
            doc.text("Radial Deviation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Radial Deviation: ');
            doc.setFont("courier", "bold");
            doc.text(lwristmmtraddev + lwristmmtplusminusraddev.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristmmtulndev)) {
            doc.setFont("courier", "normal");
            doc.text("Ulnar Deviation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Ulnar Deviation: ');
            doc.setFont("courier", "bold");
            doc.text(lwristmmtulndev + lwristmmtplusminusulndev.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristmmtpro)) {
            doc.setFont("courier", "normal");
            doc.text("Pronation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Pronation: ');
            doc.setFont("courier", "bold");
            doc.text(lwristmmtpro + lwristmmtplusminuspro.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristmmtsup)) {
            doc.setFont("courier", "normal");
            doc.text("Supination: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Supination: ');
            doc.setFont("courier", "bold");
            doc.text(lwristmmtsup + lwristmmtplusminussup.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristmmtgrip)) {
            doc.setFont("courier", "normal");
            doc.text("Grip: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Grip: ');
            doc.setFont("courier", "bold");
            doc.text(lwristmmtgrip + lwristmmtplusminusgrip.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }

        //POPULATE R WRIST MMT MEASUREMENTS

        if (hasUserInput(rwristmmtflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(rwristmmtflex + rwristmmtplusminusflex.trim() + '/5', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristmmtext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(rwristmmtext + rwristmmtplusminusext.trim() + '/5', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristmmtraddev)) {
            doc.setFont("courier", "normal");
            doc.text("Radial Deviation: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Radial Deviation: ');
            doc.setFont("courier", "bold");
            doc.text(rwristmmtraddev + rwristmmtplusminusraddev.trim() + '/5', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristmmtulndev)) {
            doc.setFont("courier", "normal");
            doc.text("Ulnar Deviation: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Ulnar Deviation: ');
            doc.setFont("courier", "bold");
            doc.text(rwristmmtulndev + rwristmmtplusminusulndev.trim() + '/5', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristmmtpro)) {
            doc.setFont("courier", "normal");
            doc.text("Pronation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Pronation: ');
            doc.setFont("courier", "bold");
            doc.text(rwristmmtpro + rwristmmtplusminuspro.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(rwristmmtsup)) {
            doc.setFont("courier", "normal");
            doc.text("Supination: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Supination: ');
            doc.setFont("courier", "bold");
            doc.text(rwristmmtsup + rwristmmtplusminussup.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(rwristmmtgrip)) {
            doc.setFont("courier", "normal");
            doc.text("Grip: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Grip: ');
            doc.setFont("courier", "bold");
            doc.text(rwristmmtgrip + rwristmmtplusminusgrip.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }















        //SET STARTING POSITION FOR AROM


        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 6, 190, verticalposition + 6);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }











        //WRIST AROM



















        //DISPLAYS L WRIST AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(lwristaromflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristaromext)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristaromulndev)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristaromraddev)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristarompro)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristaromsup)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }



        //DISPLAYS R WRIST AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(rwristaromflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist AROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristaromext)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist AROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristaromulndev)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist AROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristaromraddev)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist AROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristarompro)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist AROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristaromsup)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist AROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }




        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE L WRIST AROM MEASUREMENTS

        if (hasUserInput(lwristaromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lwristaromflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristaromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lwristaromext + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristaromraddev)) {
            doc.setFont("courier", "normal");
            doc.text("Radial Deviation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Radial Deviation: ');
            doc.setFont("courier", "bold");
            doc.text(lwristaromraddev + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristaromulndev)) {
            doc.setFont("courier", "normal");
            doc.text("Ulnar Deviation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Ulnar Deviation: ');
            doc.setFont("courier", "bold");
            doc.text(lwristaromulndev + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristarompro)) {
            doc.setFont("courier", "normal");
            doc.text("Pronation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Pronation: ');
            doc.setFont("courier", "bold");
            doc.text(lwristarompro + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristaromsup)) {
            doc.setFont("courier", "normal");
            doc.text("Supination: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Supination: ');
            doc.setFont("courier", "bold");
            doc.text(lwristaromsup + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }

        //POPULATE R WRIST AROM MEASUREMENTS

        if (hasUserInput(rwristaromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(rwristaromflex + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristaromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(rwristaromext + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristaromraddev)) {
            doc.setFont("courier", "normal");
            doc.text("Radial Deviation: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Radial Deviation: ');
            doc.setFont("courier", "bold");
            doc.text(rwristaromraddev + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristaromulndev)) {
            doc.setFont("courier", "normal");
            doc.text("Ulnar Deviation: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Ulnar Deviation: ');
            doc.setFont("courier", "bold");
            doc.text(rwristaromulndev + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristarompro)) {
            doc.setFont("courier", "normal");
            doc.text("Pronation: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Pronation: ');
            doc.setFont("courier", "bold");
            doc.text(rwristarompro + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristaromsup)) {
            doc.setFont("courier", "normal");
            doc.text("Supination: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Supination: ');
            doc.setFont("courier", "bold");
            doc.text(rwristaromsup + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }












        //SET STARTING POSITION FOR PROM

        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }










        //WRIST PROM



















        //DISPLAYS L WRIST PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(lwristpromflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristpromext)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristpromulndev)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristpromraddev)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristprompro)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lwristpromsup)) {
            doc.setFont("courier", "bold");
            doc.text("L Wrist PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }



        //DISPLAYS R WRIST PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(rwristpromflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist PROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristpromext)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist PROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristpromulndev)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist PROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristpromraddev)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist PROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristprompro)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist PROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rwristpromsup)) {
            doc.setFont("courier", "bold");
            doc.text("R Wrist PROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }




        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE L WRIST PROM MEASUREMENTS

        if (hasUserInput(lwristpromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lwristpromflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristpromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lwristpromext + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristpromraddev)) {
            doc.setFont("courier", "normal");
            doc.text("Radial Deviation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Radial Deviation: ');
            doc.setFont("courier", "bold");
            doc.text(lwristpromraddev + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristpromulndev)) {
            doc.setFont("courier", "normal");
            doc.text("Ulnar Deviation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Ulnar Deviation: ');
            doc.setFont("courier", "bold");
            doc.text(lwristpromulndev + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristprompro)) {
            doc.setFont("courier", "normal");
            doc.text("Pronation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Pronation: ');
            doc.setFont("courier", "bold");
            doc.text(lwristprompro + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lwristpromsup)) {
            doc.setFont("courier", "normal");
            doc.text("Supination: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Supination: ');
            doc.setFont("courier", "bold");
            doc.text(lwristpromsup + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }

        //POPULATE R WRIST PROM MEASUREMENTS

        if (hasUserInput(rwristpromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(rwristpromflex + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristpromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(rwristpromext + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristpromraddev)) {
            doc.setFont("courier", "normal");
            doc.text("Radial Deviation: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Radial Deviation: ');
            doc.setFont("courier", "bold");
            doc.text(rwristpromraddev + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristpromulndev)) {
            doc.setFont("courier", "normal");
            doc.text("Ulnar Deviation: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Ulnar Deviation: ');
            doc.setFont("courier", "bold");
            doc.text(rwristpromulndev + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristprompro)) {
            doc.setFont("courier", "normal");
            doc.text("Pronation: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Pronation: ');
            doc.setFont("courier", "bold");
            doc.text(rwristprompro + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rwristpromsup)) {
            doc.setFont("courier", "normal");
            doc.text("Supination: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Supination: ');
            doc.setFont("courier", "bold");
            doc.text(rwristpromsup + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }




        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }







        //DISPLAY OBSERVATION INPUT IF PRESENT


        if (hasUserInput(wristobservation)) {
            doc.setFont("courier", "bold");
            doc.text("Observation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Observation: ');
            var wristobservationwidth = doc.getTextWidth(wristobservation);
            doc.setFont("courier", "normal");
            var splitObservation = doc.splitTextToSize(trimLineBreaks(wristobservation), 170 - labelwidth);
            doc.text(splitObservation, labelwidth + 20, verticalposition);
            if (wristobservationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (wristobservationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (wristobservationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (wristobservationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (wristobservationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }



        //DISPLAY PALPATION INFO


        if (hasUserInput(wristpalpation)) {
            doc.setFont("courier", "bold");
            doc.text("Palpation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Palpation: ');
            var wristpalpationwidth = doc.getTextWidth(wristpalpation);
            doc.setFont("courier", "normal");
            var splitPalpation = doc.splitTextToSize(trimLineBreaks(wristpalpation), 170 - labelwidth);
            doc.text(splitPalpation, labelwidth + 20, verticalposition);
            if (wristpalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (wristpalpationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (wristpalpationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (wristpalpationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (wristpalpationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }

        }





        //DISPLAY MOBILITY INPUT IF PRESENT


        if (hasUserInput(wristmobility)) {
            doc.setFont("courier", "bold");
            doc.text("Mobility: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Mobility: ');
            var wristmobilitywidth = doc.getTextWidth(wristmobility);
            doc.setFont("courier", "normal");
            var splitMobility = doc.splitTextToSize(trimLineBreaks(wristmobility), 170 - labelwidth);
            doc.text(splitMobility, labelwidth + 20, verticalposition);
            if (wristmobilitywidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (wristmobilitywidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (wristmobilitywidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (wristmobilitywidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (wristmobilitywidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }


        //DISPLAY WRIST SPECIAL TEST INPUT IF PRESENT


        if (hasUserInput(wristspecialtests)) {
            doc.setFont("courier", "bold");
            doc.text("Special Tests: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Special Tests: ');
            var wristspecialtestswidth = doc.getTextWidth(wristspecialtests);
            doc.setFont("courier", "normal");
            var splitWristspecialtests = doc.splitTextToSize(trimLineBreaks(wristspecialtests), 170 - labelwidth);
            doc.text(splitWristspecialtests, labelwidth + 20, verticalposition);
            if (wristpalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (wristspecialtestswidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (wristspecialtestswidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (wristspecialtestswidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (wristspecialtestswidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }




    }











    //HIP OBJECTIVE
    if (hipcheckbox.checked) {
        doc.addPage();
        var verticalposition = 10;
        doc.setFont("courier", "bold");
        doc.text("Hip", 105, verticalposition, 'center');
        doc.setFont("courier", "normal");
        verticalposition += 10;









        //DISPLAYS L HIP MMT IF ANY MMT INPUT IS PRESENT
        if (hasUserInput(lhipmmtflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lhipmmtext)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lhipmmtabd)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lhipmmter)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lhipmmtir)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }


        //DISPLAYS R HIP MMT IF ANY MMT INPUT IS PRESENT
        if (hasUserInput(rhipmmtflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rhipmmtext)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rhipmmtabd)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rhipmmter)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rhipmmtir)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }



        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE L HIP MMT MEASUREMENTS

        if (hasUserInput(lhipmmtflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lhipmmtflex + lhipmmtplusminusflex.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lhipmmtext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lhipmmtext + lhipmmtplusminusext.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lhipmmtabd)) {
            doc.setFont("courier", "normal");
            doc.text("ABduction: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('ABduction: ');
            doc.setFont("courier", "bold");
            doc.text(lhipmmtabd + lhipmmtplusminusabd.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lhipmmter)) {
            doc.setFont("courier", "normal");
            doc.text("External Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('External Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lhipmmter + lhipmmtplusminuser.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lhipmmtir)) {
            doc.setFont("courier", "normal");
            doc.text("Internal Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Internal Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lhipmmtir + lhipmmtplusminusir.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }

        //POPULATE R HIP MMT MEASUREMENTS

        if (hasUserInput(rhipmmtflex)) {
            doc.setFont("courier", "bold");
            doc.text(rhipmmtflex + rhipmmtplusminusflex.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhipmmtflex + rhipmmtplusminusflex.trim() + '/5');
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rhipmmtext)) {
            doc.setFont("courier", "bold");
            doc.text(rhipmmtext + rhipmmtplusminusext.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhipmmtext + rhipmmtplusminusext.trim() + '/5');
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rhipmmtabd)) {
            doc.setFont("courier", "bold");
            doc.text(rhipmmtabd + rhipmmtplusminusabd.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhipmmtabd + rhipmmtplusminusabd.trim() + '/5');
            doc.setFont("courier", "normal");
            doc.text("ABduction: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rhipmmter)) {
            doc.setFont("courier", "bold");
            doc.text(rhipmmter + rhipmmtplusminuser.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhipmmter + rhipmmtplusminuser.trim() + '/5');
            doc.setFont("courier", "normal");
            doc.text("External Rotation: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rhipmmtir)) {
            doc.setFont("courier", "bold");
            doc.text(rhipmmtir + rhipmmtplusminusir.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhipmmtir + rhipmmtplusminusir.trim() + '/5');
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
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }











        //HIP AROM



















        //DISPLAYS L HIP AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(lhiparomflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lhiparomext)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lhiparomabd)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lhiparomer)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lhiparomir)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }


        //DISPLAYS R HIP AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(rhiparomflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rhiparomext)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rhiparomabd)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rhiparomer)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rhiparomir)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }


        doc.setFont("courier", "normal");
        doc.setFontSize(14);


















        //POPULATE L HIP AROM MEASUREMENTS






















        if (hasUserInput(lhiparomflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lhiparomflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lhiparomext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lhiparomext + ' deg', 75, leftverticalposition); leftverticalposition += 5;
        }
        if (hasUserInput(lhiparomabd)) {
            doc.setFont("courier", "normal");
            doc.text("ABduction: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('ABduction: ');
            doc.setFont("courier", "bold");
            doc.text(lhiparomabd + ' deg', 75, leftverticalposition); leftverticalposition += 5;
        }
        if (hasUserInput(lhiparomer)) {
            doc.setFont("courier", "normal");
            doc.text("External Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('External Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lhiparomer + ' deg', 75, leftverticalposition); leftverticalposition += 5;
        }
        if (hasUserInput(lhiparomir)) {
            doc.setFont("courier", "normal");
            doc.text("Internal Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Internal Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lhiparomir + ' deg', 75, leftverticalposition); leftverticalposition += 5;
        }

        //POPULATE R HIP AROM MEASUREMENTS

        if (hasUserInput(rhiparomflex)) {
            doc.setFont("courier", "bold");
            doc.text(rhiparomflex + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhiparomflex + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rhiparomext)) {
            doc.setFont("courier", "bold");
            doc.text(rhiparomext + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhiparomext + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rhiparomabd)) {
            doc.setFont("courier", "bold");
            doc.text(rhiparomabd + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhiparomabd + ' deg');
            doc.setFont("courier", "normal");
            doc.text("ABduction: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rhiparomer)) {
            doc.setFont("courier", "bold");
            doc.text(rhiparomer + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhiparomer + ' deg');
            doc.setFont("courier", "normal");
            doc.text("External Rotation: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rhiparomir)) {
            doc.setFont("courier", "bold");
            doc.text(rhiparomir + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhiparomir + ' deg');
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
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }










        //HIP PROM



















        //DISPLAYS L HIP PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(lhippromflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lhippromext)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lhippromabd)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lhippromer)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lhippromir)) {
            doc.setFont("courier", "bold");
            doc.text("L Hip PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }


        //DISPLAYS R HIP PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(rhippromflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rhippromext)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rhippromabd)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rhippromer)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rhippromir)) {
            doc.setFont("courier", "bold");
            doc.text("R Hip PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }


        doc.setFont("courier", "normal");
        doc.setFontSize(14);


















        //POPULATE L HIP PROM MEASUREMENTS






















        if (hasUserInput(lhippromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lhippromflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lhippromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lhippromext + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lhippromabd)) {
            doc.setFont("courier", "normal");
            doc.text("ABduction: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('ABduction: ');
            doc.setFont("courier", "bold");
            doc.text(lhippromabd + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lhippromer)) {
            doc.setFont("courier", "normal");
            doc.text("External Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('External Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lhippromer + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lhippromir)) {
            doc.setFont("courier", "normal");
            doc.text("Internal Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Internal Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lhippromir + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }

        //POPULATE R HIP PROM MEASUREMENTS

        if (hasUserInput(rhippromflex)) {
            doc.setFont("courier", "bold");
            doc.text(rhippromflex + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhippromflex + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rhippromext)) {
            doc.setFont("courier", "bold");
            doc.text(rhippromext + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhippromext + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rhippromabd)) {
            doc.setFont("courier", "bold");
            doc.text(rhippromabd + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhippromabd + ' deg');
            doc.setFont("courier", "normal");
            doc.text("ABduction: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rhippromer)) {
            doc.setFont("courier", "bold");
            doc.text(rhippromer + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhippromer + ' deg');
            doc.setFont("courier", "normal");
            doc.text("External Rotation: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rhippromir)) {
            doc.setFont("courier", "bold");
            doc.text(rhippromir + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rhippromir + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Internal Rotation: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }




        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }







        //DISPLAY OBSERVATION INPUT IF PRESENT


        if (hasUserInput(hipobservation)) {
            doc.setFont("courier", "bold");
            doc.text("Observation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Observation: ');
            var hipobservationwidth = doc.getTextWidth(hipobservation);
            doc.setFont("courier", "normal");
            var splitObservation = doc.splitTextToSize(trimLineBreaks(hipobservation), 170 - labelwidth);
            doc.text(splitObservation, labelwidth + 20, verticalposition);
            if (hipobservationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (hipobservationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (hipobservationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (hipobservationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (hipobservationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }



        //DISPLAY PALPATION INFO


        if (hasUserInput(hippalpation)) {
            doc.setFont("courier", "bold");
            doc.text("Palpation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Palpation: ');
            var hippalpationwidth = doc.getTextWidth(hippalpation);
            doc.setFont("courier", "normal");
            var splitPalpation = doc.splitTextToSize(trimLineBreaks(hippalpation), 170 - labelwidth);
            doc.text(splitPalpation, labelwidth + 20, verticalposition);
            if (hippalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (hippalpationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (hippalpationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (hippalpationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (hippalpationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }

        }





        //DISPLAY MOBILITY INPUT IF PRESENT


        if (hasUserInput(hipmobility)) {
            doc.setFont("courier", "bold");
            doc.text("Mobility: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Mobility: ');
            var hipmobilitywidth = doc.getTextWidth(hipmobility);
            doc.setFont("courier", "normal");
            var splitMobility = doc.splitTextToSize(trimLineBreaks(hipmobility), 170 - labelwidth);
            doc.text(splitMobility, labelwidth + 20, verticalposition);
            if (hipmobilitywidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (hipmobilitywidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (hipmobilitywidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (hipmobilitywidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (hipmobilitywidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }


        //DISPLAY HIP SPECIAL TEST INPUT IF PRESENT


        if (hasUserInput(hipspecialtests)) {
            doc.setFont("courier", "bold");
            doc.text("Special Tests: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Special Tests: ');
            var hipspecialtestswidth = doc.getTextWidth(hipspecialtests);
            doc.setFont("courier", "normal");
            var splitHipspecialtests = doc.splitTextToSize(trimLineBreaks(hipspecialtests), 170 - labelwidth);
            doc.text(splitHipspecialtests, labelwidth + 20, verticalposition);
            if (hippalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (hipspecialtestswidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (hipspecialtestswidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (hipspecialtestswidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (hipspecialtestswidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }














    }








    //KNEE OBJECTIVE
    if (kneecheckbox.checked) {
        doc.addPage();
        var verticalposition = 10;
        doc.setFont("courier", "bold");
        doc.text("Knee", 105, verticalposition, 'center');
        doc.setFont("courier", "normal");
        verticalposition += 10;

        if (hasUserInput(lkneemmtflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Knee MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lkneemmtext)) {
            doc.setFont("courier", "bold");
            doc.text("L Knee MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }



        //DISPLAYS R KNEE MMT IF ANY MMT INPUT IS PRESENT
        if (hasUserInput(rkneemmtflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Knee MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rkneemmtext)) {
            doc.setFont("courier", "bold");
            doc.text("R Knee MMT", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }




        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE L KNEE MMT MEASUREMENTS

        if (hasUserInput(lkneemmtflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lkneemmtflex + lkneemmtplusminusflex.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lkneemmtext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lkneemmtext + lkneemmtplusminusext.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }


        //POPULATE R KNEE MMT MEASUREMENTS

        if (hasUserInput(rkneemmtflex)) {
            doc.setFont("courier", "bold");
            doc.text(rkneemmtflex + rkneemmtplusminusflex.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rkneemmtflex + rkneemmtplusminusflex.trim() + '/5');
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rkneemmtext)) {
            doc.setFont("courier", "bold");
            doc.text(rkneemmtext + rkneemmtplusminusext.trim() + '/5', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rkneemmtext + rkneemmtplusminusext.trim() + '/5');
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }

















        //SET STARTING POSITION FOR AROM


        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 6, 190, verticalposition + 6);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }











        //KNEE AROM



















        //DISPLAYS L KNEE AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(lkneearomflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Knee AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lkneearomext)) {
            doc.setFont("courier", "bold");
            doc.text("L Knee AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }



        //DISPLAYS R KNEE AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(rkneearomflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Knee AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rkneearomext)) {
            doc.setFont("courier", "bold");
            doc.text("R Knee AROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }





        doc.setFont("courier", "normal");
        doc.setFontSize(14);


















        //POPULATE L KNEE AROM MEASUREMENTS






















        if (hasUserInput(lkneearomflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lkneearomflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lkneearomext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lkneearomext + ' deg', 75, leftverticalposition); leftverticalposition += 5;
        }




        //POPULATE R KNEE AROM MEASUREMENTS





        if (hasUserInput(rkneearomflex)) {
            doc.setFont("courier", "bold");
            doc.text(rkneearomflex + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rkneearomflex + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rkneearomext)) {
            doc.setFont("courier", "bold");
            doc.text(rkneearomext + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rkneearomext + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }











        //SET STARTING POSITION FOR PROM

        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }










        //KNEE PROM



















        //DISPLAYS L KNEE PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(lkneepromflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Knee PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lkneepromext)) {
            doc.setFont("courier", "bold");
            doc.text("L Knee PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }






        //DISPLAYS R KNEE PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(rkneepromflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Knee PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rkneepromext)) {
            doc.setFont("courier", "bold");
            doc.text("R Knee PROM", 190, verticalposition, 'right');
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }





        doc.setFont("courier", "normal");
        doc.setFontSize(14);


















        //POPULATE L KNEE PROM MEASUREMENTS






















        if (hasUserInput(lkneepromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lkneepromflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lkneepromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lkneepromext + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }





        //POPULATE R KNEE PROM MEASUREMENTS






        if (hasUserInput(rkneepromflex)) {
            doc.setFont("courier", "bold");
            doc.text(rkneepromflex + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rkneepromflex + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }
        if (hasUserInput(rkneepromext)) {
            doc.setFont("courier", "bold");
            doc.text(rkneepromext + ' deg', 190, rightverticalposition, 'right');
            var labelwidth = doc.getTextWidth(rkneepromext + ' deg');
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 190 - labelwidth, rightverticalposition, 'right');
            rightverticalposition += 5;
        }







        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }







        //DISPLAY OBSERVATION INPUT IF PRESENT


        if (hasUserInput(kneeobservation)) {
            doc.setFont("courier", "bold");
            doc.text("Observation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Observation: ');
            var kneeobservationwidth = doc.getTextWidth(kneeobservation);
            doc.setFont("courier", "normal");
            var splitObservation = doc.splitTextToSize(trimLineBreaks(kneeobservation), 170 - labelwidth);
            doc.text(splitObservation, labelwidth + 20, verticalposition);
            if (kneeobservationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (kneeobservationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (kneeobservationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (kneeobservationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (kneeobservationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }



        //DISPLAY PALPATION INFO


        if (hasUserInput(kneepalpation)) {
            doc.setFont("courier", "bold");
            doc.text("Palpation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Palpation: ');
            var kneepalpationwidth = doc.getTextWidth(kneepalpation);
            doc.setFont("courier", "normal");
            var splitPalpation = doc.splitTextToSize(trimLineBreaks(kneepalpation), 170 - labelwidth);
            doc.text(splitPalpation, labelwidth + 20, verticalposition);
            if (kneepalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (kneepalpationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (kneepalpationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (kneepalpationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (kneepalpationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }

        }





        //DISPLAY MOBILITY INPUT IF PRESENT


        if (hasUserInput(kneemobility)) {
            doc.setFont("courier", "bold");
            doc.text("Mobility: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Mobility: ');
            var kneemobilitywidth = doc.getTextWidth(kneemobility);
            doc.setFont("courier", "normal");
            var splitMobility = doc.splitTextToSize(trimLineBreaks(kneemobility), 170 - labelwidth);
            doc.text(splitMobility, labelwidth + 20, verticalposition);
            if (kneemobilitywidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (kneemobilitywidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (kneemobilitywidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (kneemobilitywidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (kneemobilitywidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }


        //DISPLAY KNEE SPECIAL TEST INPUT IF PRESENT


        if (hasUserInput(kneespecialtests)) {
            doc.setFont("courier", "bold");
            doc.text("Special Tests: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Special Tests: ');
            var kneespecialtestswidth = doc.getTextWidth(kneespecialtests);
            doc.setFont("courier", "normal");
            var splitKneespecialtests = doc.splitTextToSize(trimLineBreaks(kneespecialtests), 170 - labelwidth);
            doc.text(splitKneespecialtests, labelwidth + 20, verticalposition);
            if (kneepalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (kneespecialtestswidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (kneespecialtestswidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (kneespecialtestswidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (kneespecialtestswidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }






        }




    }






    //ANKLE OBJECTIVE
    if (anklecheckbox.checked) {
        doc.addPage();
        var verticalposition = 10;
        doc.setFont("courier", "bold");
        doc.text("Ankle", 105, verticalposition, 'center');
        doc.setFont("courier", "normal");
        verticalposition += 10;









        //DISPLAYS L ANKLE MMT IF ANY MMT INPUT IS PRESENT
        if (hasUserInput(lanklemmtdflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Ankle MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lanklemmtpflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Ankle MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lanklemmtev)) {
            doc.setFont("courier", "bold");
            doc.text("L Ankle MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lanklemmtinv)) {
            doc.setFont("courier", "bold");
            doc.text("L Ankle MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }



        //DISPLAYS R ANKLE MMT IF ANY MMT INPUT IS PRESENT
        if (hasUserInput(ranklemmtdflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Ankle MMT", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(ranklemmtpflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Ankle MMT", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(ranklemmtev)) {
            doc.setFont("courier", "bold");
            doc.text("R Ankle MMT", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(ranklemmtinv)) {
            doc.setFont("courier", "bold");
            doc.text("R Ankle MMT", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }




        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE L ANKLE MMT MEASUREMENTS

        if (hasUserInput(lanklemmtdflex)) {
            doc.setFont("courier", "normal");
            doc.text("Dorsiflexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Dorsiflexion: ');
            doc.setFont("courier", "bold");
            doc.text(lanklemmtdflex + lanklemmtplusminusdflex.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lanklemmtpflex)) {
            doc.setFont("courier", "normal");
            doc.text("Plantarflexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Plantarflexion: ');
            doc.setFont("courier", "bold");
            doc.text(lanklemmtpflex + lanklemmtplusminuspflex.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lanklemmtinv)) {
            doc.setFont("courier", "normal");
            doc.text("Inversion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Inversion: ');
            doc.setFont("courier", "bold");
            doc.text(lanklemmtinv + lanklemmtplusminusinv.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lanklemmtev)) {
            doc.setFont("courier", "normal");
            doc.text("Eversion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Eversion: ');
            doc.setFont("courier", "bold");
            doc.text(lanklemmtev + lanklemmtplusminusev.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }



        //POPULATE R ANKLE MMT MEASUREMENTS

        if (hasUserInput(ranklemmtdflex)) {
            doc.setFont("courier", "normal");
            doc.text("Dorsiflexion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Dorsiflexion: ');
            doc.setFont("courier", "bold");
            doc.text(ranklemmtdflex + ranklemmtplusminusdflex.trim() + '/5', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(ranklemmtpflex)) {
            doc.setFont("courier", "normal");
            doc.text("Plantarflexion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Plantarflexion: ');
            doc.setFont("courier", "bold");
            doc.text(ranklemmtpflex + ranklemmtplusminuspflex.trim() + '/5', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(ranklemmtinv)) {
            doc.setFont("courier", "normal");
            doc.text("Inversion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Inversion: ');
            doc.setFont("courier", "bold");
            doc.text(ranklemmtinv + ranklemmtplusminusinv.trim() + '/5', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(ranklemmtev)) {
            doc.setFont("courier", "normal");
            doc.text("Eversion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Eversion: ');
            doc.setFont("courier", "bold");
            doc.text(ranklemmtev + ranklemmtplusminusev.trim() + '/5', 75, rightverticalposition);
            rightverticalposition += 5;
        }
















        //SET STARTING POSITION FOR AROM


        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 6, 190, verticalposition + 6);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }











        //ANKLE AROM



















        //DISPLAYS L ANKLE AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(lanklearomdflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Ankle AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lanklearompflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Ankle AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lanklearomev)) {
            doc.setFont("courier", "bold");
            doc.text("L Ankle AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lanklearominv)) {
            doc.setFont("courier", "bold");
            doc.text("L Ankle AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }



        //DISPLAYS R ANKLE AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(ranklearomdflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Ankle AROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(ranklearompflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Ankle AROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(ranklearomev)) {
            doc.setFont("courier", "bold");
            doc.text("R Ankle AROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(ranklearominv)) {
            doc.setFont("courier", "bold");
            doc.text("R Ankle AROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }





        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE L ANKLE AROM MEASUREMENTS

        if (hasUserInput(lanklearomdflex)) {
            doc.setFont("courier", "normal");
            doc.text("Dorsiflexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Dorsiflexion: ');
            doc.setFont("courier", "bold");
            doc.text(lanklearomdflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lanklearompflex)) {
            doc.setFont("courier", "normal");
            doc.text("Plantarflexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Plantarflexion: ');
            doc.setFont("courier", "bold");
            doc.text(lanklearompflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lanklearominv)) {
            doc.setFont("courier", "normal");
            doc.text("Inversion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Inversion: ');
            doc.setFont("courier", "bold");
            doc.text(lanklearominv + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lanklearomev)) {
            doc.setFont("courier", "normal");
            doc.text("Eversion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Eversion: ');
            doc.setFont("courier", "bold");
            doc.text(lanklearomev + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }

        //POPULATE R ANKLE AROM MEASUREMENTS

        if (hasUserInput(ranklearomdflex)) {
            doc.setFont("courier", "normal");
            doc.text("Dorsiflexion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Dorsiflexion: ');
            doc.setFont("courier", "bold");
            doc.text(ranklearomdflex + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(ranklearompflex)) {
            doc.setFont("courier", "normal");
            doc.text("Plantarflexion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Plantarflexion: ');
            doc.setFont("courier", "bold");
            doc.text(ranklearompflex + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(ranklearominv)) {
            doc.setFont("courier", "normal");
            doc.text("Inversion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Inversion: ');
            doc.setFont("courier", "bold");
            doc.text(ranklearominv + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(ranklearomev)) {
            doc.setFont("courier", "normal");
            doc.text("Eversion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Eversion: ');
            doc.setFont("courier", "bold");
            doc.text(ranklearomev + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }













        //SET STARTING POSITION FOR PROM

        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }










        //ANKLE PROM



















        //DISPLAYS L ANKLE PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(lanklepromdflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Ankle PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lankleprompflex)) {
            doc.setFont("courier", "bold");
            doc.text("L Ankle PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lanklepromev)) {
            doc.setFont("courier", "bold");
            doc.text("L Ankle PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lankleprominv)) {
            doc.setFont("courier", "bold");
            doc.text("L Ankle PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }




        //DISPLAYS R ANKLE PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(ranklepromdflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Ankle PROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rankleprompflex)) {
            doc.setFont("courier", "bold");
            doc.text("R Ankle PROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(ranklepromev)) {
            doc.setFont("courier", "bold");
            doc.text("R Ankle PROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }
        else if (hasUserInput(rankleprominv)) {
            doc.setFont("courier", "bold");
            doc.text("R Ankle PROM", 20, verticalposition);
            var rightverticalposition = verticalposition;
            rightverticalposition += 10;
        }





        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE L ANKLE PROM MEASUREMENTS

        if (hasUserInput(lanklepromdflex)) {
            doc.setFont("courier", "normal");
            doc.text("Dorsiflexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Dorsiflexion: ');
            doc.setFont("courier", "bold");
            doc.text(lanklepromdflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lankleprompflex)) {
            doc.setFont("courier", "normal");
            doc.text("Plantarflexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Plantarflexion: ');
            doc.setFont("courier", "bold");
            doc.text(lankleprompflex + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lankleprominv)) {
            doc.setFont("courier", "normal");
            doc.text("Inversion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Inversion: ');
            doc.setFont("courier", "bold");
            doc.text(lankleprominv + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lanklepromev)) {
            doc.setFont("courier", "normal");
            doc.text("Eversion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Eversion: ');
            doc.setFont("courier", "bold");
            doc.text(lanklepromev + ' deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }


        //POPULATE R ANKLE PROM MEASUREMENTS

        if (hasUserInput(ranklepromdflex)) {
            doc.setFont("courier", "normal");
            doc.text("Dorsiflexion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Dorsiflexion: ');
            doc.setFont("courier", "bold");
            doc.text(ranklepromdflex + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rankleprompflex)) {
            doc.setFont("courier", "normal");
            doc.text("Plantarflexion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Plantarflexion: ');
            doc.setFont("courier", "bold");
            doc.text(rankleprompflex + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(rankleprominv)) {
            doc.setFont("courier", "normal");
            doc.text("Inversion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Inversion: ');
            doc.setFont("courier", "bold");
            doc.text(rankleprominv + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }
        if (hasUserInput(ranklepromev)) {
            doc.setFont("courier", "normal");
            doc.text("Eversion: ", 20, rightverticalposition);
            var labelwidth = doc.getTextWidth('Eversion: ');
            doc.setFont("courier", "bold");
            doc.text(ranklepromev + ' deg', 75, rightverticalposition);
            rightverticalposition += 5;
        }





        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }







        //DISPLAY OBSERVATION INPUT IF PRESENT


        if (hasUserInput(ankleobservation)) {
            doc.setFont("courier", "bold");
            doc.text("Observation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Observation: ');
            var ankleobservationwidth = doc.getTextWidth(ankleobservation);
            doc.setFont("courier", "normal");
            var splitObservation = doc.splitTextToSize(trimLineBreaks(ankleobservation), 170 - labelwidth);
            doc.text(splitObservation, labelwidth + 20, verticalposition);
            if (ankleobservationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (ankleobservationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (ankleobservationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (ankleobservationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (ankleobservationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }



        //DISPLAY PALPATION INFO


        if (hasUserInput(anklepalpation)) {
            doc.setFont("courier", "bold");
            doc.text("Palpation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Palpation: ');
            var anklepalpationwidth = doc.getTextWidth(anklepalpation);
            doc.setFont("courier", "normal");
            var splitPalpation = doc.splitTextToSize(trimLineBreaks(anklepalpation), 170 - labelwidth);
            doc.text(splitPalpation, labelwidth + 20, verticalposition);
            if (anklepalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (anklepalpationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (anklepalpationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (anklepalpationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (anklepalpationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }

        }





        //DISPLAY MOBILITY INPUT IF PRESENT


        if (hasUserInput(anklemobility)) {
            doc.setFont("courier", "bold");
            doc.text("Mobility: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Mobility: ');
            var anklemobilitywidth = doc.getTextWidth(anklemobility);
            doc.setFont("courier", "normal");
            var splitMobility = doc.splitTextToSize(trimLineBreaks(anklemobility), 170 - labelwidth);
            doc.text(splitMobility, labelwidth + 20, verticalposition);
            if (anklemobilitywidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (anklemobilitywidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (anklemobilitywidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (anklemobilitywidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (anklemobilitywidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }


        //DISPLAY ANKLE SPECIAL TEST INPUT IF PRESENT


        if (hasUserInput(anklespecialtests)) {
            doc.setFont("courier", "bold");
            doc.text("Special Tests: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Special Tests: ');
            var anklespecialtestswidth = doc.getTextWidth(anklespecialtests);
            doc.setFont("courier", "normal");
            var splitAnklespecialtests = doc.splitTextToSize(trimLineBreaks(anklespecialtests), 170 - labelwidth);
            doc.text(splitAnklespecialtests, labelwidth + 20, verticalposition);
            if (anklepalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (anklespecialtestswidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (anklespecialtestswidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (anklespecialtestswidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (anklespecialtestswidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }




    }




    //CT OBJECTIVE
    if (ctcheckbox.checked) {
        doc.addPage();
        var verticalposition = 10;
        doc.setFont("courier", "bold");
        doc.text("Ct", 105, verticalposition, 'center');
        doc.setFont("courier", "normal");
        verticalposition += 10;









        //DISPLAYS  CT MMT IF ANY MMT INPUT IS PRESENT
        if (hasUserInput(ctmmtflex)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctmmtext)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctmmtrrot)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctmmtlrot)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctmmtrsb)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctmmtlsb)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }






        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE CT MMT MEASUREMENTS

        if (hasUserInput(ctmmtflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(ctmmtflex + ctmmtplusminusflex.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctmmtext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(ctmmtext + ctmmtplusminusext.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctmmtrrot)) {
            doc.setFont("courier", "normal");
            doc.text("Right rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Right rotation: ');
            doc.setFont("courier", "bold");
            doc.text(ctmmtrrot + ctmmtplusminusrrot.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctmmtlrot)) {
            doc.setFont("courier", "normal");
            doc.text("Left Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Left Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(ctmmtlrot + ctmmtplusminuslrot.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctmmtrsb)) {
            doc.setFont("courier", "normal");
            doc.text("Right Sidebending: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Right Sidebending: ');
            doc.setFont("courier", "bold");
            doc.text(ctmmtrsb + ctmmtplusminusrsb.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctmmtlsb)) {
            doc.setFont("courier", "normal");
            doc.text("Left Sidebending: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Left Sidebending: ');
            doc.setFont("courier", "bold");
            doc.text(ctmmtlsb + ctmmtplusminuslsb.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }

















        //SET STARTING POSITION FOR AROM


        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 6, 190, verticalposition + 6);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }











        //CT AROM



















        //DISPLAYS CT AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(ctaromflex)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctaromext)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctaromrrot)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctaromlrot)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctaromrsb)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctaromlsb)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }






        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE CT AROM MEASUREMENTS

        if (hasUserInput(ctaromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(ctaromflex + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctaromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(ctaromext + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctaromrrot)) {
            doc.setFont("courier", "normal");
            doc.text("Right rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Right rotation: ');
            doc.setFont("courier", "bold");
            doc.text(ctaromrrot + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctaromlrot)) {
            doc.setFont("courier", "normal");
            doc.text("Left Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Left Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(ctaromlrot + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctaromrsb)) {
            doc.setFont("courier", "normal");
            doc.text("Right Sidebending: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Right Sidebending: ');
            doc.setFont("courier", "bold");
            doc.text(ctaromrsb + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctaromlsb)) {
            doc.setFont("courier", "normal");
            doc.text("Left Sidebending: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Left Sidebending: ');
            doc.setFont("courier", "bold");
            doc.text(ctaromlsb + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }






        //SET STARTING POSITION FOR PROM

        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }










        //CT PROM


















        //DISPLAYS CT PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(ctpromflex)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctpromext)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctpromrrot)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctpromlrot)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctpromrsb)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(ctpromlsb)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }






        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE CT PROM MEASUREMENTS

        if (hasUserInput(ctpromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(ctpromflex + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctpromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(ctpromext + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctpromrrot)) {
            doc.setFont("courier", "normal");
            doc.text("Right rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Right rotation: ');
            doc.setFont("courier", "bold");
            doc.text(ctpromrrot + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctpromlrot)) {
            doc.setFont("courier", "normal");
            doc.text("Left Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Left Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(ctpromlrot + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctpromrsb)) {
            doc.setFont("courier", "normal");
            doc.text("Right Sidebending: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Right Sidebending: ');
            doc.setFont("courier", "bold");
            doc.text(ctpromrsb + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(ctpromlsb)) {
            doc.setFont("courier", "normal");
            doc.text("Left Sidebending: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Left Sidebending: ');
            doc.setFont("courier", "bold");
            doc.text(ctpromlsb + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }










        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }










        //DISPLAY OBSERVATION INPUT IF PRESENT


        if (hasUserInput(ctobservation)) {
            doc.setFont("courier", "bold");
            doc.text("Observation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Observation: ');
            var ctobservationwidth = doc.getTextWidth(ctobservation);
            doc.setFont("courier", "normal");
            var splitObservation = doc.splitTextToSize(trimLineBreaks(ctobservation), 170 - labelwidth);
            doc.text(splitObservation, labelwidth + 20, verticalposition);
            if (ctobservationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (ctobservationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (ctobservationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (ctobservationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (ctobservationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }



        //DISPLAY PALPATION INFO


        if (hasUserInput(ctpalpation)) {
            doc.setFont("courier", "bold");
            doc.text("Palpation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Palpation: ');
            var ctpalpationwidth = doc.getTextWidth(ctpalpation);
            doc.setFont("courier", "normal");
            var splitPalpation = doc.splitTextToSize(trimLineBreaks(ctpalpation), 170 - labelwidth);
            doc.text(splitPalpation, labelwidth + 20, verticalposition);
            if (ctpalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (ctpalpationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (ctpalpationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (ctpalpationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (ctpalpationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }

        }





        //DISPLAY MOBILITY INPUT IF PRESENT


        if (hasUserInput(ctmobility)) {
            doc.setFont("courier", "bold");
            doc.text("Mobility: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Mobility: ');
            var ctmobilitywidth = doc.getTextWidth(ctmobility);
            doc.setFont("courier", "normal");
            var splitMobility = doc.splitTextToSize(trimLineBreaks(ctmobility), 170 - labelwidth);
            doc.text(splitMobility, labelwidth + 20, verticalposition);
            if (ctmobilitywidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (ctmobilitywidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (ctmobilitywidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (ctmobilitywidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (ctmobilitywidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }


        //DISPLAY CT SPECIAL TEST INPUT IF PRESENT


        if (hasUserInput(ctspecialtests)) {
            doc.setFont("courier", "bold");
            doc.text("Special Tests: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Special Tests: ');
            var ctspecialtestswidth = doc.getTextWidth(ctspecialtests);
            doc.setFont("courier", "normal");
            var splitCtspecialtests = doc.splitTextToSize(trimLineBreaks(ctspecialtests), 170 - labelwidth);
            doc.text(splitCtspecialtests, labelwidth + 20, verticalposition);
            if (ctpalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (ctspecialtestswidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (ctspecialtestswidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (ctspecialtestswidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (ctspecialtestswidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }














    }




    //LS OBJECTIVE
    if (lscheckbox.checked) {
        doc.addPage();
        var verticalposition = 10;
        doc.setFont("courier", "bold");
        doc.text("Lumbosacral", 105, verticalposition, 'center');
        doc.setFont("courier", "normal");
        verticalposition += 10;









        //DISPLAYS  LS MMT IF ANY MMT INPUT IS PRESENT
        if (hasUserInput(lsmmtflex)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lsmmtext)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lsmmtrrot)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lsmmtlrot)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lsmmtrsb)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lsmmtlsb)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic MMT", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }






        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE LS MMT MEASUREMENTS

        if (hasUserInput(lsmmtflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lsmmtflex + lsmmtplusminusflex.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lsmmtext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lsmmtext + lsmmtplusminusext.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lsmmtrrot)) {
            doc.setFont("courier", "normal");
            doc.text("Right rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Right rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lsmmtrrot + lsmmtplusminusrrot.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lsmmtlrot)) {
            doc.setFont("courier", "normal");
            doc.text("Left Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Left Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lsmmtlrot + lsmmtplusminuslrot.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lsmmtrsb)) {
            doc.setFont("courier", "normal");
            doc.text("Right Sidebending: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Right Sidebending: ');
            doc.setFont("courier", "bold");
            doc.text(lsmmtrsb + lsmmtplusminusrsb.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lsmmtlsb)) {
            doc.setFont("courier", "normal");
            doc.text("Left Sidebending: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Left Sidebending: ');
            doc.setFont("courier", "bold");
            doc.text(lsmmtlsb + lsmmtplusminuslsb.trim() + '/5', 75, leftverticalposition);
            leftverticalposition += 5;
        }

















        //SET STARTING POSITION FOR AROM


        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 6, 190, verticalposition + 6);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }











        //LS AROM



















        //DISPLAYS LS AROM IF ANY AROM INPUT IS PRESENT
        if (hasUserInput(lsaromflex)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lsaromext)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lsaromrrot)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lsaromlrot)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lsaromrsb)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lsaromlsb)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic AROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }






        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE LS AROM MEASUREMENTS

        if (hasUserInput(lsaromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lsaromflex + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lsaromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lsaromext + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lsaromrrot)) {
            doc.setFont("courier", "normal");
            doc.text("Right rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Right rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lsaromrrot + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lsaromlrot)) {
            doc.setFont("courier", "normal");
            doc.text("Left Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Left Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lsaromlrot + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lsaromrsb)) {
            doc.setFont("courier", "normal");
            doc.text("Right Sidebending: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Right Sidebending: ');
            doc.setFont("courier", "bold");
            doc.text(lsaromrsb + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lsaromlsb)) {
            doc.setFont("courier", "normal");
            doc.text("Left Sidebending: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Left Sidebending: ');
            doc.setFont("courier", "bold");
            doc.text(lsaromlsb + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }






        //SET STARTING POSITION FOR PROM

        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }










        //LS PROM


















        //DISPLAYS LS PROM IF ANY PROM INPUT IS PRESENT
        if (hasUserInput(lspromflex)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lspromext)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lspromrrot)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lspromlrot)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lspromrsb)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }
        else if (hasUserInput(lspromlsb)) {
            doc.setFont("courier", "bold");
            doc.text("Cervicothoracic PROM", 20, verticalposition);
            var leftverticalposition = verticalposition;
            leftverticalposition += 10;
        }






        doc.setFont("courier", "normal");
        doc.setFontSize(14);


        //POPULATE LS PROM MEASUREMENTS

        if (hasUserInput(lspromflex)) {
            doc.setFont("courier", "normal");
            doc.text("Flexion: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Flexion: ');
            doc.setFont("courier", "bold");
            doc.text(lspromflex + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lspromext)) {
            doc.setFont("courier", "normal");
            doc.text("Extension: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Extension: ');
            doc.setFont("courier", "bold");
            doc.text(lspromext + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lspromrrot)) {
            doc.setFont("courier", "normal");
            doc.text("Right rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Right rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lspromrrot + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lspromlrot)) {
            doc.setFont("courier", "normal");
            doc.text("Left Rotation: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Left Rotation: ');
            doc.setFont("courier", "bold");
            doc.text(lspromlrot + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lspromrsb)) {
            doc.setFont("courier", "normal");
            doc.text("Right Sidebending: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Right Sidebending: ');
            doc.setFont("courier", "bold");
            doc.text(lspromrsb + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }
        if (hasUserInput(lspromlsb)) {
            doc.setFont("courier", "normal");
            doc.text("Left Sidebending: ", 20, leftverticalposition);
            var labelwidth = doc.getTextWidth('Left Sidebending: ');
            doc.setFont("courier", "bold");
            doc.text(lspromlsb + 'deg', 75, leftverticalposition);
            leftverticalposition += 5;
        }










        if (rightverticalposition >= leftverticalposition) {
            var verticalposition = rightverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else if (rightverticalposition < leftverticalposition) {
            var verticalposition = leftverticalposition;
            doc.line(20, verticalposition + 5, 190, verticalposition + 5);
            verticalposition += 15;
        }
        else {
            var verticalposition = verticalposition;
        }










        //DISPLAY OBSERVATION INPUT IF PRESENT


        if (hasUserInput(lsobservation)) {
            doc.setFont("courier", "bold");
            doc.text("Observation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Observation: ');
            var lsobservationwidth = doc.getTextWidth(lsobservation);
            doc.setFont("courier", "normal");
            var splitObservation = doc.splitTextToSize(trimLineBreaks(lsobservation), 170 - labelwidth);
            doc.text(splitObservation, labelwidth + 20, verticalposition);
            if (lsobservationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (lsobservationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (lsobservationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (lsobservationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (lsobservationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }



        //DISPLAY PALPATION INFO


        if (hasUserInput(lspalpation)) {
            doc.setFont("courier", "bold");
            doc.text("Palpation: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Palpation: ');
            var lspalpationwidth = doc.getTextWidth(lspalpation);
            doc.setFont("courier", "normal");
            var splitPalpation = doc.splitTextToSize(trimLineBreaks(lspalpation), 170 - labelwidth);
            doc.text(splitPalpation, labelwidth + 20, verticalposition);
            if (lspalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (lspalpationwidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (lspalpationwidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (lspalpationwidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (lspalpationwidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }

        }





        //DISPLAY MOBILITY INPUT IF PRESENT


        if (hasUserInput(lsmobility)) {
            doc.setFont("courier", "bold");
            doc.text("Mobility: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Mobility: ');
            var lsmobilitywidth = doc.getTextWidth(lsmobility);
            doc.setFont("courier", "normal");
            var splitMobility = doc.splitTextToSize(trimLineBreaks(lsmobility), 170 - labelwidth);
            doc.text(splitMobility, labelwidth + 20, verticalposition);
            if (lsmobilitywidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (lsmobilitywidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (lsmobilitywidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (lsmobilitywidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (lsmobilitywidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }


        //DISPLAY LS SPECIAL TEST INPUT IF PRESENT


        if (hasUserInput(lsspecialtests)) {
            doc.setFont("courier", "bold");
            doc.text("Special Tests: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Special Tests: ');
            var lsspecialtestswidth = doc.getTextWidth(lsspecialtests);
            doc.setFont("courier", "normal");
            var splitLsspecialtests = doc.splitTextToSize(trimLineBreaks(lsspecialtests), 170 - labelwidth);
            doc.text(splitLsspecialtests, labelwidth + 20, verticalposition);
            if (lspalpationwidth < 170 - labelwidth) {
                doc.line(20, verticalposition + 5, 190, verticalposition + 5);
                verticalposition += 15;
            }
            else if (lsspecialtestswidth < (170 - labelwidth) * 2) {
                doc.line(20, verticalposition + 10, 190, verticalposition + 10);
                verticalposition += 20;
            }
            else if (lsspecialtestswidth < (170 - labelwidth) * 3) {
                doc.line(20, verticalposition + 15, 190, verticalposition + 15);
                verticalposition += 25;
            }
            else if (lsspecialtestswidth < (170 - labelwidth) * 4) {
                doc.line(20, verticalposition + 20, 190, verticalposition + 20);
                verticalposition += 30;
            }
            else if (lsspecialtestswidth < (170 - labelwidth) * 5) {
                doc.line(20, verticalposition + 25, 190, verticalposition + 25);
                verticalposition += 35;
            }
        }














    }












    /*ASSESSMENT & PLAN*/{
        if (hasUserInput(impairments)) {
            doc.addPage();
            var verticalposition = 10;
            doc.setFont("courier", "bold");
            doc.text("Assessment & Plan", 105, verticalposition, 'center');
            doc.setFont("courier", "normal");
            verticalposition += 10;
        }
        else if (hasUserInput(limitations)) {
            doc.addPage();
            var verticalposition = 10;
            doc.setFont("courier", "bold");
            doc.text("Assessment & Plan", 105, verticalposition, 'center');
            doc.setFont("courier", "normal");
            verticalposition += 10;
        }
        else if (hasUserInput(assessmenttext)) {
            doc.addPage();
            var verticalposition = 10;
            doc.setFont("courier", "bold");
            doc.text("Assessment & Plan", 105, verticalposition, 'center');
            doc.setFont("courier", "normal");
            verticalposition += 10;
        }




        //POPULATE ASSESSMENT SHIT



        if (hasUserInput(impairments)) {
            doc.setFont("courier", "bold");
            doc.text("Impairments: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Impairments: ');
            doc.setFont("courier", "normal");
            var splitimpairments = doc.splitTextToSize(trimLineBreaks(impairments), 170 - labelwidth);
            doc.text(splitimpairments, labelwidth + 20, verticalposition);
            var impairmentswidth = doc.getTextWidth(impairments);
            if (impairmentswidth < 170 - labelwidth) {
                verticalposition += 10;
            }
            else if (impairmentswidth < (170 - labelwidth) * 2) {
                verticalposition += 20;
            }
            else if (impairmentswidth < (170 - labelwidth) * 3) {
                verticalposition += 25;
            }
            else if (impairmentswidth < (170 - labelwidth) * 4) {
                verticalposition += 30;
            }
            else if (impairmentswidth < (170 - labelwidth) * 5) {
                verticalposition += 35;
            }
        }

        if (hasUserInput(limitations)) {
            doc.setFont("courier", "bold");
            doc.text("Limitations: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Impairments: ');
            doc.setFont("courier", "normal");
            var splitlimitations = doc.splitTextToSize(trimLineBreaks(limitations), 170 - labelwidth);
            doc.text(splitlimitations, labelwidth + 20, verticalposition);
            var limitationswidth = doc.getTextWidth(limitations);
            if (limitationswidth < 170 - labelwidth) {
                verticalposition += 10;
            }
            else if (limitationswidth < (170 - labelwidth) * 2) {
                verticalposition += 20;
            }
            else if (limitationswidth < (170 - labelwidth) * 3) {
                verticalposition += 25;
            }
            else if (limitationswidth < (170 - labelwidth) * 4) {
                verticalposition += 30;
            }
            else if (limitationswidth < (170 - labelwidth) * 5) {
                verticalposition += 35;
            }
        }

        if (hasUserInput(assessmenttext)) {
            doc.setFont("courier", "bold");
            doc.text("Assessment: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Assessment: ');
            doc.setFont("courier", "normal");
            var splitassessmenttext = doc.splitTextToSize(trimLineBreaks(assessmenttext), 170 - labelwidth);
            doc.text(splitassessmenttext, labelwidth + 20, verticalposition);
            var assessmenttextwidth = doc.getTextWidth(assessmenttext);
            if (assessmenttextwidth < 170 - labelwidth) {
                verticalposition += 10;
            }
            else if (assessmenttextwidth < (170 - labelwidth) * 2) {
                verticalposition += 20;
            }
            else if (assessmenttextwidth < (170 - labelwidth) * 3) {
                verticalposition += 25;
            }
            else if (assessmenttextwidth < (170 - labelwidth) * 4) {
                verticalposition += 30;
            }
            else if (assessmenttextwidth < (170 - labelwidth) * 5) {
                verticalposition += 35;
            }
        }


        if (hasUserInput(planfrequency) + (hasUserInput(planduration))){
            doc.setFont("courier", "bold")
            var verticalposition = 280;
            doc.text("Plan: ", 20, verticalposition);
            var labelwidth = doc.getTextWidth('Plan: ');
            doc.setFont("courier", "normal");
            doc.text('Initiate PT at ' + planfrequency + ' for ' + planduration, labelwidth + 20, verticalposition);
        }

    }

   
    doc.save("pteval.pdf")

} 