# React VK API Access

This is a minimal React-based demo application for authenticating users via VKontakte (VK) OAuth and accessing basic VK API endpoints. It was originally built in 2018 as a learning experiment.

## Features

* VK OAuth 2.0 login using `VK.Auth.login`
* Fetches authorized user info and a short list of friends
* Written with React and React Dom

## Usage

Clicking the "Authorize" button performs OAuth authorization on VKontakte and displays the name of the authorized user and five of their friends.

## Setup

1. Clone the repository

2. Install dependencies:

   ```bash
   yarn install --frozen-lockfile
   ```

3. Run the application to develop locally:

   ```bash
   yarn start
   ```

4. Verify it's working by visiting http://localhost:8080/

## Disclaimer

This project was built for demonstration purposes only and is not actively maintained.

---

## ⚠️ Status (2025)

VK's OAuth API and SDK behavior have changed since 2018, and **this demo no longer functions as expected**.

### TODO

* Investigate VK API changes since 2023
* Replace deprecated `VK.Auth.login` usage
* Migrate to current OAuth flow (possibly using redirect URL + server handling)
* Consider switching to the new [VK Mini Apps platform](https://dev.vk.com/miniprogram/start)
