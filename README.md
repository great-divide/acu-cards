# acu-cards
A simple acupuncture-point-location flashcard app designed for acupuncture students. It has a React frontend (`/client`) that connects with a Rails API. As a bonus, the database makes use of ActiveStorage to attach images to objects in the database.

# getting acquainted
The basic structure follows the recommendations [in this blog post](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/).

To get set up, clone the repo and a run `bundle install` then `cd client && npm install`. 

Next, install the `Foreman gem` globally on your system.
This will allow you to use the command `foreman start -p 3000` to launch the Rails backend and React frontend simultaneously. The frontend will render at `localhost:3000` while the backend will fire up at `localhost:3001`.... __in theory!__

There are occasional bugs (I used Rails 6 for grins, downgrading to Rails 5.2.2 might resolve them) that cause the Rails server to go awol and give proxy errors. If this happens, the best workaround is to `kill -kill` the active ports and reboot the client and server sides separately, with `rails s -p 3001` and `cd client && npm start`. __IMPORTANT:__ if you do this, open `localhost:3001` in your browser before hitting the db from the client side at `localhost:3000`. You may not run into this issue at all, but if you do, this is my current duct-taped-together style solution.

# future development
This is an extremely basic (ugly) skeleton of the essential concept. Future versions will include these features:
1. Point prescriptions in additon to point locations
2. User Auth
3. Quiz Mode -- built in spaced repetition for return Users (using SuperMemo). This would require three buttons to be added to the flashcards, where the User can input "don't know/sort of know/know" when prompted.
4. Improved visual design, including fluid image sizing on the flashcard backs
