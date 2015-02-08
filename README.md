# placebrew
A place for placeholder images of delicious brew.

## Brewery address
http://placebrew.com

## How to use the placebrew.com API
Placebrew.com pours delicious servings of brew images (beer and coffee) based on user input of width and height. 

### Basic functionality
Defining a custom /width and /height after the placebrew.com URL will pour a brew on your screen.

#### Example
HD brew: `http://placebrew.com/1920/1080`
Tiny brew: `http://placebrew.com/1/1`

### Brewmaster functionality
The placebrew API has the functionality to cover all of your beer/coffee connoisseur needs.

Remember earlier, when you we talked about the basic functionality? No? I know beer is great, but please keep yourself together.

Anyway, the basic functionality is basically (such vocabulary) a shorthand for `http://placebrew.com/brew/image/a/1920/1080`.

What does this mean, wizard?

* `/brew` means that we're looking for some sort of 'brew' in the database
* `/image` means that we want the brew returned as an image file
* `/a` means that we want the "Aspect Ratio" functionality (more on this later)
* `/1920` is the width of the image we want
* `/1080` is the height of the image we want (skip this if you want a square image)

#### You mentioned "Aspect Ratio" functionality. Are there more functionality-ies?
Great observation. Nice to see you're sobering up. Currently there are four functionalities:

* `/a` for Aspect Ratio: Pours a brew image that fits best your selected width and height dimentions.
* `/random`: Pours you a totally random brew image.
* `/specific`: Lets you specify the name of the brew you want
* `/type/style`: Lets you specify the type (coffee or beer) and/or the style (IPA, black, amber ale) of the brew you want
