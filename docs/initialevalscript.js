function generatePDF() {
    const {jsPDF} = window.jspdf;
    const doc = new jsPDF();

    // VARIABLES

            //SUBJECTIVE VARIABLES
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

                //SHOULDER VARIABLEs
            var shoulderobservation = document.getElementById('shoulderobservation').value;
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

            var lshoulderaromflex = document.getElementById('lshoulderaromflex').value;
            var lshoulderaromext = document.getElementById('lshoulderaromext').value;
            var lshoulderaromabd = document.getElementById('lshoulderaromabd').value;
            var lshoulderaromer = document.getElementById('lshoulderaromer').value;
            var lshoulderaromir = document.getElementById('lshoulderaromir').value;

            var lshoulderpromflex = document.getElementById('lshoulderpromflex').value;
            var lshoulderpromext = document.getElementById('lshoulderpromext').value;
            var lshoulderpromabd = document.getElementById('lshoulderpromabd').value;
            var lshoulderpromer = document.getElementById('lshoulderpromer').value;
            var lshoulderpromir = document.getElementById('lshoulderpromir').value;
            
          

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

        //SUB STYLE
    doc.text("Location: " + subloc, 20, 20);
    doc.text("Onset: " + subons, 20, 30);
    doc.text("Mechanism of Injury: " + submoi, 20, 40);
    doc.text("Aggravating Factors: " + subagg, 20, 50);
    doc.text("Easing Factors: " + subeas, 20, 60);
    doc.text("Imaging: " + subimg, 20, 70);
    doc.text("Hobbies: " + subhob, 20, 80);
    doc.text("Occupation: " + subocc, 20, 90);
    doc.text(subtext, 20, 100);
    
        //OBJ STYLE
    doc.text("Observation: " + shoulderobservation, 20, 120);
    doc.text("L shoulder flexion MMT: " + lshouldermmtflex + lshouldermmtplusminusflex + "/5", 20, 130);
    doc.text("L shoulder extension MMT: " + lshouldermmtext + lshouldermmtplusminusext + "/5", 20, 140);
    doc.text("L shoulder abduction MMT: " + lshouldermmtabd + lshouldermmtplusminusabd + "/5", 20, 150);
    doc.text("L shoulder external rotation MMT: " + lshouldermmter + lshouldermmtplusminuser + "/5", 20, 160);
    doc.text("L shoulder internal rotation MMT: " + lshouldermmtir + lshouldermmtplusminusir + "/5", 20, 170);

    doc.text("L shoulder flexion AROM: " + lshoulderaromflex, 20, 180);
    doc.text("L shoulder extension AROM: " + lshoulderaromext, 20, 190);
    doc.text("L shoulder abduction AROM: " + lshoulderaromabd, 20, 200);
    doc.text("L shoulder external rotation AROM: " + lshoulderaromer, 20, 210);
    doc.text("L shoulder internal rotation AROM: " + lshoulderaromir, 20, 220);
    
    doc.save("pteval.pdf")

} 