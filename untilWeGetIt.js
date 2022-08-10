class TypingEffect {
  constructor({
    // constructor declaration, you can add whatever you wanna customize from the constructor
    hasLetters = true,
    hasNumbers = false,
    hasSymbols = false,
    DomElement,
    delay = 40,
    hasHiddenScrollbar,
  }) {
    this.isFinished = false;
    this.hasNotStartedforFirstTime = true;
    this.processing = false;
    // add overflow: auto
    this.addAutoOverflow = true;
    //
    this.shouldRestart = false;
    // hide/show scrollbar
    this.hasHiddenScrollbar = hasHiddenScrollbar;
    //
    this.startIndex = 0;
    // the elment
    this.DomElement = DomElement;
    //
    this.text = this.DomElement.dataset.text;
    // delay enter lines, if you understand
    this.delay = delay;
    //
    this.hasLetters = hasLetters;
    //
    this.hasNumbers = hasNumbers;
    //
    this.hasSymbols = hasSymbols;
    // the letters, I prefer using a collection of letters than a regExp, because it's easier to remove letters by this
    this.letters = "azertyuiopmlkjhgfdsqwxcvbn";
    // honestly, I hate regExp
    this.numbers = "0123456789";
    // this will add symbols
    this.symbols = " =/*+-!?0:;*$^<>.)('{}[]";
    // this.will calculate the duration taken to complete the process
    this.completeDuration = 0;
    // this will calculate the number of tries to complete the process
    (this.triesNumbers = 0),
      // this the logic to add the letters, numbers and symbols to the collection
      (this.contentsCollection = [
        hasLetters ? this.letters : "",
        hasNumbers ? this.numbers : "",
        hasSymbols ? this.symbols : "",
      ].join(""));
  }

  startTypingEffect() {
    this.hasNotStartedforFirstTime = false;
    this.processing = true;
    // this will add/remove the overflow: auto
    this.addAutoOverflow == true
      ? this.DomElement.classList.add("auto-overflow")
      : "";
    // initialize the element content to empty so no exception will be thrown, if you have nested elements, please wrap the element you want to show the effect on and update the DomElement variable
    this.DomElement.innerHTML = "";
    //
    this.startIndex = 0;

    this.shouldRestart = false;
    let interval = setInterval(() => {
      // let the scroll always to down(bottom), so the latest added data will be shown
      
      this.DomElement.scrollTop = this.DomElement.scrollHeight;
      let randomLetter =
        this.contentsCollection[
          Math.floor(Math.random() * this.contentsCollection.length)
        ];
      //
      let newValue = this.text.substring(0, this.startIndex) + randomLetter;
      this.triesNumbers++;
      // add the new value to the element
      this.DomElement.innerHTML += newValue + "</br>";
      // starting where the last value was added, so the next value will be added after the last one
      if (randomLetter == this.text[this.startIndex]) {
        this.startIndex++;
      }
      // stop when we achieve this condition
      if (newValue == this.text && this.isFinished == false) {
        clearInterval(interval);
        this.isFinished = true;
      }
      // calculating duration
      this.completeDuration += this.delay;
      // this should work like recursion, whenever you execute the restart function shouldRestart boolean will be true, and the interval will be cleared and the startTypingEffect will be called again
      if (this.shouldRestart == true) {
        clearInterval(interval);
        // re-init values
        this.DomElement.innerHTML = "";
        newValue = "";
        this.startIndex = 0;
        // and again it will return to false, so when the restart function is called again, same process'll be done
        this.shouldRestart = false;
        // new startTypingEffect will be called
        this.startTypingEffect();
      }
    }, this.delay);

    if (this.hasHiddenScrollbar) {
      this.DomElement.classList.add("has-visible-scrollbar");
      // what happen under the hood
      let newStyleElement = document.createElement("style");
      newStyleElement.innerHTML = `.has-visible-scrollbar::-webkit-scrollbar {
display: none;
      }`;
      document.head.appendChild(newStyleElement);
      //
    }
  }
  // this is related with the main function, check it first
  restart() {
    this.shouldRestart = true;
  }
  // use it when you want to show the duration of the process in some place
  showCompletionDuration() {
    return this.completeDuration;
  }
  // use it when you want to show the number of tries to complete the process in some place
  showTriesNumber() {
    return this.triesNumbers;
  }
  showStatus() {
    if (this.hasNotStartedforFirstTime == true) {
      return "not-started";
    }

    if (this.processing == true && this.isFinished == false) {
      return "processing";
    }
    if (this.isFinished == true) {
      return "finished";
    }
    return "something-went-wrong";
  }
}

let effect = new TypingEffect({
  DomElement: document.querySelector("#p"),
  delay: 40,
  hasLetters: true,
  hasNumbers: true,
  hasSymbols: true,
  hasHiddenScrollbar: false,
});

document.getElementById("start").addEventListener("click", () => {
  effect.startTypingEffect();
});
document.getElementById("restart").addEventListener("click", () => {
  effect.restart();
});

document.getElementById("duration").addEventListener("click", () => {
  alert(effect.showCompletionDuration());
});

document.getElementById("tries").addEventListener("click", () => {
  alert(effect.showTriesNumber());
});
