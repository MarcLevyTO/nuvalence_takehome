import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, waitFor, screen } from "@testing-library/react";
import UserList from "../src/components/AddressBook/UserList";

describe("Load and interact with UsersList", () => {
  test("preloaded, users are not visible", async () => {
    const users = [];
    const setUser = jest.fn(() => {});

    render(
      <>
        <UserList users={users} setUser={setUser} />
      </>
    );
    await waitFor(() => expect(screen.getByText("Loading...")));
  });

  test("users loaded, users are visible", async () => {
    const users = [
      { 
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Fake",
          "last": "Male"
        },
        "email": "fake.make@gmail.com",
      },
      { 
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "Unreal",
          "last": "Female"
        },
        "email": "unreal.femail@gmail.com",
      }
    ];
    const setUser = jest.fn(() => {});

    render(
      <>
        <UserList users={users} setUser={setUser} />
      </>
    );

    await waitFor(() => expect(screen.findByText("Fake")));
    await waitFor(() => expect(screen.findByText("Unreal")));
  });
});
