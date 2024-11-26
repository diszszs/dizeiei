const bcrypt = require('bcryptjs');
const prisma = require('../app/utils/db'); // Adjust the path as needed

async function main() {
    const hashedPassword = await bcrypt.hash('your-password', 10);

    await prisma.user.create({
        data: {
            email: 'Hadis@gmail.com',
            password: hashedPassword,
        },
    });

    console.log('User created successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
