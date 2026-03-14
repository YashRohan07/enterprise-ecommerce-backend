// Validates request body, params, and query using a provided Zod schema.
const validate = (schema) => {
  return (req, res, next) => {
    // Validate the request data in one place before controller logic runs.
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    // Forward validation error to the global error middleware.
    if (!result.success) {
      return next(result.error);
    }

    // Store validated data for later use if needed.
    req.validatedData = result.data;
    next();
  };
};

module.exports = validate;
