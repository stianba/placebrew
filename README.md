# placebrew
A place for placeholder images of delicious brew.

## Brewery address
http://placebrew.com

## How to use the placebrew.com API
Placebrew.com pours delicious servings of brew images (beer and coffee) based on user input of width and height. 

### Basic functionality
Defining a custom /width and /height after the placebrew.com URL will pour a brew on your screen.

##### Examples
* HD brew: `http://placebrew.com/1920/1080`
* Tiny brew: `http://placebrew.com/5/3`
* Square brew: `http://placebrew.com/250`

### Brewmaster functionality
The placebrew API has the functionality to cover all of your beer/coffee connoisseur needs.

Remember earlier, when we talked about the basic functionality? No? I know beer is great, but please keep yourself together.

Anyway, the basic functionality is basically (such vocabulary) a shorthand for `http://placebrew.com/brew/image/a/1920/1080`.

What does this mean, wizard?

* `/brew` means that we're looking for some sort of 'brew' in the database
* `/image` means that we want the brew returned as an image file
* `/a` means that we want the "Aspect Ratio" functionality (more on this later)
* `/1920` is the width of the image we want
* `/1080` is the height of the image we want (skip this if you want a square image)

#### You mentioned "Aspect Ratio" functionality. Are there more functionality-ies?
Great observation. Nice to see you're sobering up. Currently there are four functionalities:

* `/a` (Aspect Ratio) pours a brew image that fits best your selected width and height dimentions.
* `/random` pours you a totally random brew image.
* `/specific/:brewName` lets you specify the name of the brew you want.
* `/type/:typeName/:styleName` lets you specify the type (coffee or beer) and/or the style (IPA, black, amber ale) of the brew you want

**Remember:** Width and height values are always optional, no matter what kind of functionality you want. If you don't set any width or height values, the brew will retain its original pixel size.

##### Examples
* `placebrew.com/brew/image/a/200` pours a 200px by 200px square brew
* `placebrew.com/brew/image/random` pours a random brew in its original pixel size
* `placebrew.com/brew/image/random/500/600` pours a random 500px by 600px brew
* `placebrew.com/brew/image/specific/ipa_01/50/2000` pours a really narrow, but delicious ipa_01.jpg brew
* `placebrew.com/brew/image/type/coffee/478/254` pours a 478px by 254px coffee brew
* `placebrew.com/brew/image/type/coffee/black/347` pours a 347px by 347px square black coffee brew

