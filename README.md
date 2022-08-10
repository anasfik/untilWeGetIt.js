# UntilWeGetIt.js
A Lightweight word finder effect works by randomizing the words until it gets the text that e order to it !
<br><br>
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/anasfik/untilWeGetIt.js?color=blue&label=Size)
<h3>Have you see that effect in some place ?</h3>
actually we do see it a lot but in terminals..., this is a lightweight simple library used for doing the same effect but for web !


# Usage

<h3>First</h3>
Add this import to the end of your <body> before your main script file
<br><br>

```html
<script type="text/javascript" src="untilWeGetIt.js"</script>
```


<h3>Second</h3>
And now below it, create a new instance of the typingEffect

<br>
<br>

```javascript
let ourEffect = new UntilWeGetit();
```

<h3>Finally, we should customize it, I will set the code and i will explain everything in it !</h3>
<br>

```javascript
let effect = new UntilWeGetit({
  DomElement: document.querySelector("#p"),
  delay: 40,
  hasLetters: true,
  hasNumbers: true,
  hasSymbols: true,
  hasHiddenScrollbar: false,
});
```
# Parametres

<h3>DomElement</h3>
<b>DomElement</b> get the HTML element that gonna show the effect, it accepts all DOM usual ways to get an elemeny, such getElementById, getElementsByClassName, getElementsByTagName
<br><br>

```javascript
DomElement: document.querySelector("#p"),
```

<h3>Delay</h3>
<b>Delay</b> accepts a number, as it sound, the delay between each try to get the correct word (notes: it's in millisecondes)
<br><br>

```javascript
  delay: 40,
```
<h3>HasLetters</h3>
<b>HasLetters</b> accepts a boolean , if you want to execute the effect on a only-letters text (no numbers, no symbols), only letters  (by default it's set to true, you can modify it by setting it to false)
<br><br>

```javascript
  hasLetters: true,
```

<h3>hasNumbers</h3>
<b>hasNumbers</b> accepts a boolean , if you want to execute the effect on a only-numbers text (no letters, no symbols), only numbers  (by default it's set to false, you can modify it by setting it to true)
<br><br>






```javascript
  hasNumbers: true,
```

<h3>HasSymbols</h3>
<b>hasSymbols</b> accepts a boolean , if you want to execute the effect on a only-symbols text (no letters, no numbers), only symbols  (by default it's set to false, you can modify it by setting it to true)
<br><br>

```javascript
  hasSymbols: true,
```

(not completed yet !)

# Issues ?
Please, if you got in trouble, or you want to achieve something, there's an issues tab above, I will be happy to help you

# Contribute
it's just a single javascript file, clone the repository to your environment, if you have new ideas, refacoring code, modifying, I'll be happy if you'll be part of it



