import { NextResponse } from "next/server";
import { getAllData } from "../route";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data.json");

export async function PUT(request, { params: { id } }) {
  try {
    const { singleGuard } = await request.json();
    console.log(singleGuard, id);

    // Fetch existing data
    const data = await getAllData(); // Make sure this function works correctly

    const index = data.findIndex((guard) => guard.id === parseInt(id));
    if (index !== -1) {
      // Update the data for the specific guard
      data[index] = singleGuard;

      // Write the updated data back to the file
      fs.writeFileSync(filePath, JSON.stringify(data), "utf8");

      // Send a success response to the client
      return NextResponse.json(
        {
          message: "Updated successfully",
        },
        {
          status: 200,
        }
      );
    } else {
      // Send a not found response to the client
      return NextResponse.json(
        {
          message: "Guard not found",
        },
        {
          status: 404,
        }
      );
    }
  } catch (error) {
    // Handle errors and send an error response to the client
    return NextResponse.json(
      {
        message: "Error",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
