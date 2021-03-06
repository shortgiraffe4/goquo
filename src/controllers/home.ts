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

export let hotelDetail = (req: Request, res: Response) => {
  res.render("hotel-detail", {
    title: "Hotel Detail"
  });
};
