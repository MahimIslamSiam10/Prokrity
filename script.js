/*
  ==========================================================
  EDIT YOUR BIRTHDAY WEBSITE TEXT HERE
  Replace the text between quotation marks.
  Keep the quotation marks and commas. Do not delete the braces.
  ==========================================================
*/
const birthdayContent = {
  name: "Prokrity",

  openingEyebrow: "A little universe made just for you",
  openingTitle: "It's Only for you  My beloved ,<br><span>Prokrity</span> ❤️",
  openingMessage: "As I told you before baby , Onek hard Fight kore ajke race jitso . Congratulation",

  chapters: [
    {
      title: " First Interaction",
      symbol: "✧",
      message: "Jedin prothom Tomar sathe texting hoy sedin tumi amar kache hoyto normal kew chila . but tomar awaj ,tomar kotha , cute personality , Sometimes mature sometimes childish behavior , ar hae apnar onek sundor face .egulo so milai apnake amar crush banai tule baby ",

      english: "Some stories begin with one small hello—and quietly become special.",
      note: "Ei pochondo ononto kal er jonno ....."
    },
    {
      title: "Tumi Sundor",
      symbol: "♡",
      message: "jani tomar mathai prothom word etai aslo je ami Sundor nah . emon na baby , Sristikorta tonake onek niponota ar sundorjo diye banaise atlast na banalew tomar sundorjo bojhar moto chokh amake dise ...and that what matter pakhi. ",
      english: "Your beauty is not just something I see; it is something I feel.",
      note: "Shundor mon shobshomoy alada kore chokhe pore."
    },
    {
      title: "Tomake pochondo Hoyar koyekti karon..",
      symbol: "✦",
      message: "Tomar loyalty, tomar character, ar tomar values , You actually do care everything , kawke kono kichu kharap vabe bolte parona . koto kichu sikhar ase tomar kache . also DU er student bole kotha . sotti bolte egulo asole tomar proti valo laga . valobasar ki karon hoy Prokrity baby!! ",
     english: "The little things that make you who you are mean so much to me.",
      note: "Tomar moddhe ami shudhu beauty na, ekta shundor manush dekhi."
    },
    {
      title: "Moner Ekta Kotha",
      symbol: "∞",
      message: "Hoyto shob feelings shobshomoy perfect bhabe bola jay na. Tobuo ekta kotha bolte chai—tumi amar kache onek special. Tomake niye amar feelings shudhu ekta crush-er moddhe atke nei; tomar proti amar bhalobasha, shomman, ar care ache.",
      english: "You are not just a passing thought. You are someone I genuinely care about.",
      note: "Be always Mine sonamoni"
    },
    {
      title: "Agamir Golpo",
      symbol: "☾",
      message: "Amader agami kemon hobe seta to destiny bolbe . hae amader oo plan ase 2 yr por biye korar . happly sathe thakar taina bou ? amio tai chai baby . par esa hamesha to nahi hota hai nah?!!. Tobe eei Agami jemoni hok jotokhon porjonto tumi amar hat charbana totokhon eta mahim er promise je mahim tomake eka charbena . you are entirely mine , sweetheart",

      english: "Maybe our best chapters are still waiting for us in the future.",
      note: "Future-ta niye amar ekta shundor shopno ache."
    }
  ],

  finalTitle: "Happy Birthday,<br><span>Amar Priyotoma</span> ❤️",
  finalMessage: "Tomar hashi jeno kokhono hariye na jay. Tumi shobshomoy bhalo theko, ar sperm race jevabe jitso ekdin evabe duniya jite jaba inshallah .  Happy Birthday, Prokrity. ❤️",
   signature: "With all my love, always. ♡",

  // Change the button labels here if you want.
  beginButton: "Open My Heart ♡",
  nextButton: "Unlock next chapter ✨",
  lastButton: "Open your birthday surprise 🎂"
};

/* Website behaviour — you normally don't need to edit below this line. */
const $ = (id) => document.getElementById(id);
let currentChapter = 0;

$("brandName").textContent = birthdayContent.name;
$("openingEyebrow").textContent = birthdayContent.openingEyebrow;
$("openingTitle").innerHTML = birthdayContent.openingTitle;
$("openingMessage").textContent = birthdayContent.openingMessage;
$("beginButton").innerHTML = birthdayContent.beginButton;
$("finalTitle").innerHTML = birthdayContent.finalTitle;
$("finalMessage").textContent = birthdayContent.finalMessage;
$("signature").textContent = birthdayContent.signature;

function showChapter(index) {
  currentChapter = index;
  const chapter = birthdayContent.chapters[index];
  $("chapterEyebrow").textContent = `CHAPTER ${String(index + 1).padStart(2, "0")}`;
  $("chapterSymbol").textContent = chapter.symbol || "♡";
  $("chapterTitle").textContent = chapter.title;
  $("chapterMessage").textContent = chapter.message;
  $("chapterEnglish").textContent = chapter.english || "";
  $("chapterNote").textContent = chapter.note || "";
  $("progressText").textContent = `Chapter ${index + 1} of ${birthdayContent.chapters.length}`;
  const percent = Math.round(((index + 1) / birthdayContent.chapters.length) * 100);
  $("progressPercent").textContent = `${percent}%`;
  $("progressFill").style.width = `${percent}%`;
  $("backButton").classList.toggle("hidden", index === 0);
  $("nextButton").textContent = index === birthdayContent.chapters.length - 1
    ? birthdayContent.lastButton : birthdayContent.nextButton;
}

$("beginButton").addEventListener("click", () => {
  $("welcome").classList.add("hidden");
  $("story").classList.remove("hidden");
  showChapter(0);
  window.scrollTo({ top: 0, behavior: "smooth" });
  burstHearts(8);
});
$("nextButton").addEventListener("click", () => {
  if (currentChapter < birthdayContent.chapters.length - 1) {
    showChapter(currentChapter + 1);
    burstHearts(5);
  } else {
    $("story").classList.add("hidden");
    $("finale").classList.remove("hidden");
    burstHearts(24);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
});
$("backButton").addEventListener("click", () => {
  if (currentChapter > 0) showChapter(currentChapter - 1);
});
$("restartButton").addEventListener("click", () => {
  $("finale").classList.add("hidden");
  $("story").classList.add("hidden");
  $("welcome").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function burstHearts(count) {
  const holder = $("hearts");
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = ["♡", "♥", "✦", "✧"][Math.floor(Math.random() * 4)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${12 + Math.random() * 20}px`;
    heart.style.animationDelay = `${Math.random() * 1.4}s`;
    heart.style.animationDuration = `${4 + Math.random() * 3}s`;
    holder.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }
}

const music = $("backgroundMusic");
const musicButton = $("musicButton");
musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "♫ Pause music";
      musicButton.setAttribute("aria-pressed", "true");
    } catch (error) {
      alert("Music file paoa jayni. Nijer licensed MP3 file-ta website folder-e 'music.mp3' name-e rekhe abar try koro.");
    }
  } else {
    music.pause();
    musicButton.textContent = "♫ Play music";
    musicButton.setAttribute("aria-pressed", "false");
  }
});
