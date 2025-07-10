# Coinflow Software Engineer Take Home

Merchants integrating with Coinflow can opt for one of two different integration methods. They can either utilize 
Coinflow's prebuilt UI's or integrate directly with APIs. The advantage of using the prebuild UI means that a 
merchant gets all of Coinflow's features directly out of the box including: 
1. New Card Checkout
2. Saved Card Checkout
3. Apple Pay
4. Google Pay
5. 3DS
6. Fraud/Chargeback Protection SDK modules

## Your Task:

Using the existing Battle Brawlers example, add the `CoinflowPurchase` element in this file: `src/CoinflowForm.tsx`. Also add the height handler the `CoinflowPurchase` component following this recipe: https://docs.coinflow.cash/recipes/add-dynamic-height-to-a-coinflow-ui-component.

Test the following flows:
1. New Card Checkout
2. Saved Card Checkout
3. Google Pay Check
4. 3DS Challenge Checkout
5. Failed Card Checkout

Note: the merchantId you will be using is `swe-challenge`, and the environment is `sandbox`.

You will be graded on the following: 
1. Completeness of the task
2. Error handing and validation
3. Code readability

To be respectful of your time, this task was designed to be completed in under 1 hour. Please do not hesitate to reach
out to our integrations engineer Tasha (tasha@coinflowlabs.app) for questions regarding the integration. Please do be
respectful of her time as well and make sure that your questions are well-formed as this will also factor into the grading.

## Building & Running this repo

1. Install node v20 ([I like to use NVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/))
2. Change the name of file `.env.example` to `.env`
3. In the root directory run: 
4. `npm install`
5. `npm run build`
6. `npm run dev`

Changes to the UI will hot refresh/update as you make changes
