import AdminJS from 'adminjs';
import express from 'express';
import AdminJSExpress from '@adminjs/express';
import { Database, Resource } from '@adminjs/mongoose';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/Users/models.js';
import Profile from './models/Profile/model.js';
import KPI from './models/KPI/models.js';
import Transaction from './models/Transactions/models.js';
import Product from './models/Product/model.js';
import Person from './models/Person/models.js';
import Description from './models/Descriptions/models.js'
import { dark, light, noSidebar } from '@adminjs/themes'
dotenv.config();

const PORT = 3001;

// We'll need to register the mongoose Adapter
AdminJS.registerAdapter({
  Database,
  Resource
});

const start = async () => {
  const app = express();

  // This facilitates the connection to the mongo database
  await mongoose.connect(`${process.env.MONGO_URL}`);

  // We will need to create an instance of AdminJS with a basic resource
  const admin = new AdminJS({
    defaultTheme: dark.id,
    availableThemes: [dark, light, noSidebar],
    resources: [
      {
        resource: Profile,
        options: {
          listProperties: ['id', 'name', 'createdAt'],
          filterProperties: ['id', 'name', 'createdAt'],
          editProperties: ['id', 'name', 'bio', 'createdAt'],
          showProperties: ['id', 'name', 'bio', 'createdAt'],
          properties: {
            bio: {
              isVisible: {
                edit: true,
                show: true,
                list: false,
                filter: false,
              },
            },
          },
        },
      },
      {
        resource: User,
        options: {
          properties: {
            bio: {
              isVisible: {
                edit: true,
                show: true,
                list: false,
                filter: false,
              },
            },
          },
        },
      },
      {
        resource: KPI,
        options: {
          properties: {
            bio: {
              isVisible: {
                edit: true,
                show: true,
                list: false,
                filter: false,
              },
            },
          },
        },
      },
      {
        resource: Description,
        options: {
          properties: {
            bio: {
              isVisible: {
                edit: true,
                show: true,
                list: false,
                filter: false,
              },
            },
          },
        },
      },
      {
        resource: Transaction,
        options: {
          properties: {
            bio: {
              isVisible: {
                edit: true,
                show: true,
                list: false,
                filter: false,
              },
            },
          },
        },
      },
      {
        resource: Product,
        options: {
          properties: {
            bio: {
              isVisible: {
                edit: true,
                show: true,
                list: false,
                filter: false,
              },
            },
          },
        },
      },
      {
        resource: Person,
        options: {
          properties: {
            bio: {
              isVisible: {
                edit: true,
                show: true,
                list: false,
                filter: false,
              },
            },
          },
        },
      },
    ],
  });

  const adminRouter = AdminJSExpress.buildRouter(admin);

  app.use(admin.options.rootPath, adminRouter);

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`);
  });
};

start();
