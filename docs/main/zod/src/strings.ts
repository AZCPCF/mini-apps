import { z } from "zod";

// validations
z.string().max(5);
z.string().min(5);
z.string().length(5);
z.string().email();
z.string().url();
z.string().regex(/d/);
z.string().includes("test");
z.string().startsWith("string");
z.string().endsWith("et");
z.string().datetime(); // ISO 8601; by default only `Z` timezone allowed

// transforms
z.string().trim(); // trim whitespace
z.string().toLowerCase(); // toLowerCase
z.string().toUpperCase(); // toUpperCase

// added in Zod 3.23
z.string().date(); // ISO date format (YYYY-MM-DD)
z.string().time(); // ISO time format (HH:mm:ss[.SSSSSS])

const name = z.string({
  required_error: "Name is required",
  invalid_type_error: "Name must be a string",
});

z.string().min(5, { message: "Must be 5 or more characters long" });
z.string().max(5, { message: "Must be 5 or fewer characters long" });
z.string().length(5, { message: "Must be exactly 5 characters long" });
z.string().email({ message: "Invalid email address" });
z.string().url({ message: "Invalid url" });
z.string().includes("tuna", { message: "Must include tuna" });
z.string().startsWith("https://", { message: "Must provide secure URL" });
z.string().endsWith(".com", { message: "Only .com domains allowed" });
z.string().datetime({ message: "Invalid datetime string! Must be UTC." });
z.string().date("Invalid date string!");
