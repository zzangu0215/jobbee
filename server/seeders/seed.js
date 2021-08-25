const db = require("../config/connection");
const { Employer, Developer, Job } = require("../models");
const jobSeeds = require("./jobSeeds.json");
const employerSeeds = require("./employerSeeds.json");
const developerSeeds = require("./developerSeeds.json");

const createJob = async (jobData) => {
  const { _id, companyName } = await Job.create(jobData);
  return Employer.findOneAndUpdate(
    { companyName: companyName },
    {
      $addToSet: {
        jobs: _id,
      },
    }
  );
};

const createDeveloper = async (devData) => {
  const { _id } = await Developer.create(devData);

  return Employer.findOneAndUpdate(
    { name: "Jun Park" },
    {
      $addToSet: {
        likedDevelopers: _id,
      },
    }
  );
};

db.once("open", async () => {
  try {
    await db.dropDatabase();

    await Employer.create(employerSeeds);
    console.log("employer seeds done");

    await Promise.all(jobSeeds.map(createJob));
    console.log("job seeds done");

    await Promise.all(developerSeeds.map(createDeveloper));
    console.log("developer seeds done");

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
