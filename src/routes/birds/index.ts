import { Router, Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { IBird } from "../../types";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    // Read the bird data from /public/data.json
    fs.readFile(path.join(__dirname, "..", "..", "..", "public", "data.json"), "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading file");
            return;
        }

        // Parse the JSON data
        let birdData: IBird[];
        try {
            birdData = JSON.parse(data);
        } catch (err) {
            res.status(500).send("Error parsing JSON data");
            return;
        }

        // Sort the bird data in alphabetical order
        birdData.sort((a: IBird, b: IBird) => a.name.localeCompare(b.name));

        // Respond with the sorted bird data
        res.json(birdData);
    });
});

export default router;
