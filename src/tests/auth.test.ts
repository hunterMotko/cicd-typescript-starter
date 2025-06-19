import { describe, expect, test } from "vitest";
import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "src/api/auth";

const headers: IncomingHttpHeaders = {
	authorization: "ApiKey " + "KEYTESTINGGJNKLJKLSDAJFLKSJDFKL",
};

const notHeaders: IncomingHttpHeaders = {
	authorization: "Bearer " + "KEYTESTINGGJNKLJKLSDAJFLKSJDFKL",
};

describe("TEST GETAPIKEY", () => {
	test("api should be equal", () => {
		expect(getAPIKey(headers)).toBe("KEYTESTINGGJNKLJKLSDAJFLKSJDFKL");
	});

	test("should be incorrect header", () => {
		expect(getAPIKey(notHeaders)).not.toBe("KEYTESTINGGJNKLJKLSDAJFLKSJDFKL");
		expect(getAPIKey(notHeaders)).toBe(null);
	});
});
