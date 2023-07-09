import "chai-http";
import app from "../../app";
import * as chai from "chai";
import { IBird } from "../../types";

const server = app.listen();

chai.should();
chai.use(require("chai-http"));

describe("/birds endpoint", () => {
    it("should return a list of birds sorted by name", (done) => {
        chai.request(server)
            .get("/birds")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                const birds: IBird[] = res.body;
                for (let i = 0; i < birds.length - 1; i++) {
                    // Check that each name is alphabetically less than or equal to the next name
                    chai.assert(
                        birds[i].name.localeCompare(birds[i + 1].name) <= 0,
                        "List is not sorted alphabetically",
                    );
                }
                done();
            });
    });
});
