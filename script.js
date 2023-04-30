document.getElementById("mailtoButton").addEventListener("click", function() {
  const emailAddresses = [
    "hse062@legis.la.gov",
    "amedeeb@legis.la.gov",
    "bacalat@legis.la.gov",
    "bagleyl@legis.la.gov",
    "hse048@legis.la.gov",
    "bishops@legis.la.gov",
    "hse047@legis.la.gov",
    "hse102@legis.la.gov",
    "brassk@legis.la.gov",
    "brownc@legis.la.gov",
    "hse096@legis.la.gov",
    "hse038@legis.la.gov",
    "carpenterb@legis.la.gov",
    "hse032@legis.la.gov",
    "hse034@legis.la.gov",
    "carterr@legis.la.gov",
    "hse105@legis.la.gov",
    "coussanjp@legis.la.gov",
    "coxk@legis.la.gov",
    "crewsr@legis.la.gov",
    "davisp@legis.la.gov",
    "devillierp@legis.la.gov",
    "hse028@legis.la.gov",
    "hse090@legis.la.gov",
    "hse014@legis.la.gov",
    "edmondsr@legis.la.gov",
    "hse088@legis.la.gov",
    "emersonj@legis.la.gov",
    "hse033@legis.la.gov",
    "hse022@legis.la.gov",
    "hse016@legis.la.gov",
    "hse055@legis.la.gov",
    "hse098@legis.la.gov",
    "hse070@legis.la.gov",
    "hse074@legis.la.gov",
    "hse015@legis.la.gov",
    "gainesr@legis.la.gov",
    "garofalor@legis.la.gov",
    "hse035@legis.la.gov",
    "gloverc@legis.la.gov",
    "hse031@legis.la.gov",
    "hse083@legis.la.gov",
    "harrisl@legis.la.gov",
    "hilfertys@legis.la.gov",
    "hodgesv@legis.la.gov",
    "hollisp@legis.la.gov",
    "hortond@legis.la.gov",
    "hse100@legis.la.gov",
    "huvalm@legis.la.gov",
    "hse078@legis.la.gov",
    "iveyb@legis.la.gov",
    "jeffersonpo@legis.la.gov",
    "jenkinss@legis.la.gov",
    "hse027@legis.la.gov",
    "hse021@legis.la.gov",
    "jordane@legis.la.gov",
    "hse084@legis.la.gov",
    "hse093@legis.la.gov",
    "hse018@legis.la.gov",
    "hse101@legis.la.gov",
    "hse091@legis.la.gov",
    "hse026@legis.la.gov",
    "lyonsr@legis.la.gov",
    "macks@legis.la.gov",
    "mageet@legis.la.gov",
    "marcelled@legis.la.gov",
    "marinoj@legis.la.gov",
    "hse001@legis.la.gov",
    "mcfarlandj@legis.la.gov",
    "hse068@legis.la.gov",
    "mcmahenw@legis.la.gov",
    "miguezb@legis.la.gov",
    "millerd@legis.la.gov",
    "millerg@legis.la.gov",
    "hse071@legis.la.gov",
    "hse017@legis.la.gov",
    "muscarellon@legis.la.gov",
    "hse089@legis.la.gov",
    "hse099@legis.la.gov",
    "hse054@legis.la.gov",
    "hse030@legis.la.gov",
    "hse076@legis.la.gov",
    "hse003@legis.la.gov",
    "pierrev@legis.la.gov",
    "hse006@legis.la.gov",
    "risern@legis.la.gov",
    "hse037@legis.la.gov",
    "hse024@legis.la.gov",
    "schexnayderc@legis.la.gov",
    "hse082@legis.la.gov",
    "seabaugha@legis.la.gov",
    "hse067@legis.la.gov",
    "hse050@legis.la.gov",
    "stagnij@legis.la.gov",
    "stefanskij@legis.la.gov",
    "hse036@legis.la.gov",
    "thomaspj@legis.la.gov",
    "thompsof@legis.la.gov",
    "hse012@legis.la.gov",
    "hse079@legis.la.gov",
    "hse073@legis.la.gov",
    "whitema@legis.la.gov",
    "hse097@legis.la.gov",
    "wrightm@legis.la.gov",
    "zeringuej@legis.la.gov"
  ];

  const subject = encodeURIComponent("Oppose HB 466");
  const body = encodeURIComponent(
    "Dear Louisiana Representatives,\n\n" +
    "I am writing to express my opinion on HB 466. [Add your message here]\n\n" +
    "Sincerely,\n\n" +
    "Your Name"
  );

  const mailtoString = `mailto:${emailAddresses.join(",")}?subject=${subject}&body=${body}`;
  window.location.href = mailtoString;
});

