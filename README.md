# Run

1. Clone the repo
2. Install dependencies with
   `yarn` or `npm install`
3. Run the dev server with `yarn dev`

(MacOS)- The config is saved in my case in this folder just in case you want to delete de config:

`/Users/<your user>/Library/ApplicationSupport/radix-contacts`

# Time

## Monday (~1h-1.5h)

- Spent most of the time getting familiarized with electron + setting it up
- Completed the UI for the password forms and a bit of logic

## Tuesday (~3h-3.5h)

- Finished the logic for the password views
- Working on the store
- Contacts page UI and CRUD

## Wednesday (~8min)

- Adding some comments + this file

# Notes

You can find comments across the code explaining a bit on why I did that particular thing in that way or `"TODO:"` comments of what I would do in a real case scenario or with more time.

Unfortunaly I can't spend a lot of time doing this type of exercises since apart from my current position I do work on the side and you can probably notice the difference of the Password components (had better encapsulation and rehusability) vs the contacts one (had to put the sixth gear to complete the CRUD before going to sleep lol, so the Icons are not even created into components, etc).

In a real case scenario I would add more error handling, add some logger solution like morgan, to keep it safe we would need a backend to store the keys for hashing since the front is never safe.

Feel free to ask any questions about the code.

And by the way, most of my github projects are private, at least the active ones and I don't have any issue with screensharing them if you want to check the code,

Ruben
