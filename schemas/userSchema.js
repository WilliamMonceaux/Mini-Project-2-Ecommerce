const z = require('zod');

const userSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    password: z.string().min(6, 'Password must be at least 6 characters').max(100),
    email: z.string().email('Invalid email format'),
    address: z.string().min(5, 'Address must be at least 5 characters'),
});

const partialUserSchema = userSchema.partial();

module.exports = {
    userSchema,
    partialUserSchema
}