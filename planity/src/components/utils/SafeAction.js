
export const SafeAction = (schema, handler) => {
    return async (data) => {
      try {
        // Perform validation using the schema (if any validation library is available)
        const validatedData = schema ? schema(data) : data; // Assuming schema is a validation function
        // Handle the validated data with the provided handler
        const result = await handler(validatedData);
        return {
          error: null,
          data: result,
        };
      } catch (error) {
        // Catch any errors and return them
        return {
          error: error.message,
          data: null,
        };
      }
    };
  };
  