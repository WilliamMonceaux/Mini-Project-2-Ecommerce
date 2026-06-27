import * as z from "zod";

const validateRequest = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res
        .status(404)
        .json({ success: false, error: result.error.format() });
    }
    req.body = result.data;
    next();
  };
};

module.exports = { validateRequest };
