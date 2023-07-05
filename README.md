# Shortly
To use Shortly, simply paste the long URL you want to shorten into the input field on the landing page. Then, click on the "Shorten it" button. Shortly will then generate a shorter, more memorable link for you. You can then share this link with others.

# Technologies
* Vite
* React
* JavaScript
* Tailwind CSS
* HTML
* API

# Installation
First thing first is you need `node.js` installed. USe this _[Link](https://nodejs.org/)_ to be sent to the `node.js` downloads.

1. Then you can clone the code locally by copying the `HTTPS` from the `<> Code` button.

![image](https://github.com/Naz1804/url_shortening_shortly/assets/121124109/88d634c1-da23-4311-b5b5-5038c4b12047)

2. Open a terminal window or open your code editor that you can open up a terminal.
3. Navigate to the directory where you want to clone the repository.
4. Then type `git clone` paste the `HTTPS` after that.
   
```sh
git clone https://github.com/Naz1804/url_shortening_shortly.git
```


To install the dependencies, run the following command in your terminal:

```sh
npm install
```

Then:

```sh
npm run dev
```

Next you will see this:

![image](https://github.com/Naz1804/todolist/assets/121124109/10254502-15b6-43a2-b1dc-ede50c3cd804)

You have two options to either click on the `http://localhost:5173/` or press `o` to open up the `localhost`.

You can always press `h` to see what more commands they are.

# API
To know more about the API go on this `API documentation` _[link](https://shrtco.de/)_. Also go to `src` then `api.js` and you will see how i added the api.

1. When you go to the API documentation you click onto the `Developer API` and you will how to use the API.

![image](https://github.com/Naz1804/url_shortening_shortly/assets/121124109/98ff35a8-49ea-4aaf-8036-dfd6ba7c845b)

2. Then you can go down to part where it talks about shortening a link.

![image](https://github.com/Naz1804/url_shortening_shortly/assets/121124109/acfb41cd-6c27-45d8-8b06-eae580bfd35f)

3. And if you look at the `Response` section we are using `"full_short_link"` to get our output when shortening a link and you can see on `api.js` how I exactly used that specific result.

![image](https://github.com/Naz1804/url_shortening_shortly/assets/121124109/01c3364d-5767-44bc-bd18-7e86410a890d)

As you can see on the response variable we are calling the api url and the `{encodeURIComponent(url)}` is the user input.

Which then the destructer of `{ result }` will get the `response.data`. Reason why we are using `{ result }` because thats how we access the full_short_link if you look at the previos image `Response` section.

Then return `result.full_short_link` or nothing if the user do not give a valid url.
