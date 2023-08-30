import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export function getAllData() {
  const filePath = path.join(process.cwd(), "data.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContent);
  return data;
}

export async function GET() {
  const data = await getAllData();
  return NextResponse.json(data);
}
