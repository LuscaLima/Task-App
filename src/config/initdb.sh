#!/bin/bash
set - e;

mongo <<EOF
db.createUser({
  user: '$DB_USER',
  pwd: '$DB_PASS',
  roles: [
    {
      role: "readWrite",
      db: '$DB_NAME',
    },
  ],
});
EOF
