# SparkAmplify Coding Challenge

## Development Environment

- Machine: Macbook Pro ( 13-inch, 2017, Two Thunderbolt 3 ports )
- Operating System: macOS Catalina
- Processor: 2.3 GHz Dual-Core Intel Core i5
- Memory: 8 GB 2133 MHz LPDDR3
- Graphics: Intel Iris Plus Graphics 640 1536 MB
- Browser: Google Chrome Version 85.0.4183.102 (Official Build) (64-bit)

## Environment Setup

---

- Run on localhost

```bash
# do this if you do not have source code
$ git clone https://github.com/ianbig/spark-amplify-coding-challenge.git
$ npm install package.json
# do this if you want to run on localhost
$ npm run dev
```

- Access to [https://spark-amplify-coding-challenge-deploy.vercel.app/](https://spark-amplify-coding-challenge-deploy.vercel.app/) for viewing online host

## Build Tools and Reason to Use

---

- Next.js
    - possess well integrated environment for development
    - deploy website easily
- React
- Vercel: use for online deployment

## What I complete

---

- Build Complete Structure for Web frontend
    - Index page that receive query from the user
    - Result page that fetch queried data via imdbAPI
    - detail page that fetch detail for clicked movie
    - loading icon that indicate data is still fetching
    - error page that indicate invalid operation or no search result
- Resolve Image fallback
- Attempt to make topography better for laptop and  mobile device
    - set ***body font-size*** to 100%
    - set ***line-height*** to 1.4em
    - set ***font-size*** to 1.4 rem
    - add media for smaller size
- Handle error response state, including 0 result
- Check interface via chrome development tool
- Deploy on online host

## Notes for other developers

---

- Change APIkey to your own in ***function handleSubmit*** in ***SearchBar.js***
    - Signup in [http://www.omdbapi.com/](http://www.omdbapi.com/) for receiving api key

## Test Case

---

- Input search query which resulting in "0 search": direct to error page
- Exceed total page of a search result: direct to error page

## Improvement to make

---

- Reduce complexity by creating more component
- Run unit test on my deployment
- Reduce redundant state
- Build more Component to increase readability
- Increase error page information for better UI experience

## Things to Do If more time

---

- Build a static version of React
- Spend more time on break UI into a a component hierarchy
- Consider security issue
- Write a complete unit test
- Take more time to learn Next.js
- Test on real device instead of Google Chrome developer tools

## Development log

---

- Learn React ( 10 hours )
- Build Website ( 30 hours )
- Write document ( 2hours )
