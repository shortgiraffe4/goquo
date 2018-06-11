import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
  res.render("home", {
    title: "Home"
  });
};

export let search = (req: Request, res: Response) => {
  res.render("search", {
    title: "Search"
  });
};
