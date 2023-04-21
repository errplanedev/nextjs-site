---
title: The solving of project bubbles
date: 2022-4-20
---

Project bubbles is a mystery on Scratch, created by [@i_eat_coffee](https://scratch.mit.edu/users/i_eat_coffee).
The forum topic can be found [here](https://scratch.mit.edu/discuss/topic/678937/).

Let's solve this.

The first puzzle is "dGhlIG5leHQ". And when decoded with base64, says "the next".

The second puzzle is "01010110001100010101001001001011010011100100010100110001010101110110001101000110010100100101001001100010010110000100001001100001010101100110111001110000010100100100111101010001". Seems to be binary. When decoded, it's "V1RKNE1WcFRRbXBaVnpROQ". And it's base64 again. How original.
Sarcasm aside, when decoded, it says "WTJ4MVpTQmpZVzQ9". base64 *again*. Decoded it says "Y2x1ZSBjYW4=". Wow. Just wow. (hopefully for the last time) I decoded it. And it says "clue can". It's finally adding up.

Third puzzle is "be" and the topic says that there is nothing to be decoded.

Fourth (actual) puzzle is "-….- -….- / -….- .-.-.- .-.-.- / .-.-.- / -….- .-.-.- .-.-.- -….- / -….- -….- / -….- .-.-.- .-.-.- / .-.-.- -….- / -….- .-.-.- .-.-.- -….- / -….- -….- / -….- / .-.-.- -….- / .-.-.- -….- -….- / -….- -….- / -….- / .-.-.- / .-.-.- -….- -….- / -….- -….- / -….- / .-.-.- / -….- .-.-.- .-.-.- -….- / -….- -….- / -….- / .-.-.- -….- / -….- .-.-.- .-.-.- -….- / -….- -….- / -….- / .-.-.- / .-.-.- -….- -….- / -….- -….- / -….- / .-.-.- -….- / -….- .-.-.- .-.-.- -….- / -….- -….- / -….- .-.-.- .-.-.- / .-.-.- / -….- .-.-.- .-.-.- -….- / -….- -….- / -….- .-.-.- .-.-.- / .-.-.- / -….- .-.-.- .-.-.- -….- / -….- -….- / -….- / .-.-.- -….- / .-.-.- -….- -….- / -….- -….- / -….- / .-.-.- / .-.-.- -….- -….- / -….- -….- / -….- .-.-.- .-.-.- / .-.-.- / .-.-.- -….- -….- / -….- -….- / -….- .-.-.- .-.-.- / .-.-.- -….- / .-.-.- -….- -….- / -….- -….- / -….- / .-.-.- -….- / .-.-.- -….- -….- / -….- -….- / -….- .-.-.- .-.-.- / .-.-.- -….- / .-.-.- -….- -….- / -….- -….- / -….- .-.-.- .-.-.- / .-.-.- / -….- .-.-.- .-.-.- -….- / -….- -….- / -….- .-.-.- .-.-.- / .-.-.- -….- / .-.-.- -….- -….- / -….- -….- / -….- .-.-.- .-.-.- / .-.-.- / .-.-.- -….- -….- / -….- -….- / -….- / .-.-.- / -….- .-.-.- .-.-.- -….- / -….- -….- / -….- .-.-.- .-.-.- / .-.-.- / .-.-.- -….- -….- / -….- -….- / .-.-.- -….-". My brain immediately goes to morse code. Decoding it says "-- -.. . -..- -- -.. .- -..- -- - .- .-- -- - . .-- -- - . -..- -- - .- -..- -- - . .-- -- - .- -..- -- -.. . -..- -- -.. . -..- -- - .- .-- -- - . .-- -- -.. . .-- -- -.. .- .-- -- - .- .-- -- -.. .- .-- -- -.. . -..- -- -.. .- .-- -- -.. . .-- -- - . -..- -- -.. . .-- -- .-". Again, repeated encoding with the same format. Decoding *that* says "MDEXMDAXMTAWMTEWMTEXMTAXMTEWMTAXMDEXMDEXMTAWMTEWMDEWMDAWMTAWMDAWMDEXMDAWMDEWMTEXMDEWMA". I have no idea what this is. Thinking of base64 (because the author uses that alot), I decode it. It says "0100101111101110010110110100100001000111010". Looks like binary. Nevermind, it's invalid. I'm lost. But thanks to [this post](https://scratch.mit.edu/discuss/post/7162508), it says "found at".

Fifth puzzle is "QF9fZ21jYXJ2". Must be base64. It says "@__gmcarv".

Sixth puzzle is "LixsLGkscixwLGEsICxmLG8sICxoLHQsMCwyLCAsZSxoLHQsICxuLG8". Again, it's base64. Decoding it results in ".,l,i,r,p,a, ,f,o, ,h,t,0,2, ,e,h,t, ,n,o". Putting "'.,l,i,r,p,a, ,f,o, ,h,t,0,2, ,e,h,t, ,n,o'.split(',').reverse().join('');" in the JavaScript console, results in "on the 20th of april.".

The full string is "the next clue can be found at @__gmcarv on the 20th of april". It's the 20th of april right now. I look at the profile. It seems to be namesniped by some other person. The author of the forum has commented. They said "If this account is not deleted before the 22th, the challenge will be over and no prizes will be given."

Ok, someone more intelligent than me ([@uwv](https://scratch.mit.edu/users/uwv)) has decoded this using CyberChef. I lost. I recommend seeing their forum post that has the recipe links [here](https://scratch.mit.edu/discuss/post/7165648).

Cya next time.
