# Line-Up Frontend Engineer Task

## Intro

The frontend uses:
- __Vite__ — for the backend host server
- __TailwindCSS__ — for styling
- __HeadlessUI__ — for fully accessible components
- __Storybook__ — for component management

I've used __Vite server__ for all my React / Vue.js project over Create-React-App as it has really __fast hot reloading__ and is lightweight and modern. It works the same for all intents and purposes.

__TailwindCSS__ is the styling library i'm most familiar with but I did end up including a mix of regular CSS with TailwindCSS. I designed a __light and dark theme__ within every component just using the builtin Tailwind classes. I modified the config slightly, adding some custom shadows and fonts.

__HeadlessUI__ is just used for it's popover component.

I was intrigued by __Storybook__ that you were using so after I had the initial design created, I installed and tried it out. Only the custom theme button and the header components are documented in Storybook because I just didn't have enough time to work on it. By admission, this isn't very impressive but I wish to explore it further and in future projects.

## Run

First install all the dependencies with

```bash
npm i  # yarn
```

You can run the server with

```bash
npm run dev  # yarn dev
```

Additionally, storybook can be started with

```bash
npm run storybook  # yarn storybook
```



## Objective

The objective of this exercise is to create a small React App that can display content from a REST API.

It is up to you how much time you spend on this exercise - however, we would suggest that you limit your time to a few hours.

## Method

The frontend application should be built in React with TypeScript. Beyond this, you are free to use any open-source libraries/frameworks that you wish.

At Line-Up we use the following libraries and tools on a regular basis; however, for the purpose of this exercise, you should use whatever you are most comfortable with.

- [Creat React App](https://create-react-app.dev/)
- [Styled Components](https://styled-components.com/)
- [Redux](https://redux.js.org/basics/usage-with-react/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Grommet](https://v2.grommet.io/)

Your code should be commented and there should be a Readme to explain any steps required to run it.

Time should be spent on the design, look and feel of the React App to make the data presentable.

### API Details

Please use data from the [https://reqres.in](https://reqres.in/) API.

1) Please display a paginated list of users from: [https://reqres.in/api/users?page=1](https://reqres.in/api/users?page=1)

2) It should be possible to click on a user and see their details using the following api call: [https://reqres.in/api/user](https://reqres.in/api/users?page=1)/<int:id>/. Here is an example: [https://reqres.in/api/users/2](https://reqres.in/api/users/2). 

The React App should display the information from this  API. The relevant API params should be shown in the URL, user ID / page number etc. and it should be fed back to the API request to [https://reqres.in](https://reqres.in/) - so changing the URL should result in new data being displayed in the app.

### Additional Considerations

- Please comment your code.
- Please feel free to leverage third party libraries - don't reinvent the wheel. If there is a particular reason that you chose a library and you wish to convey this please do so in code.
- This is a very basic application but it you should approach as if it were the start of a project that will grow over time.
- We are interested in the methodology and structure over the functionality. If you are limited on time, please build only part of the solution but structure / comment it well.