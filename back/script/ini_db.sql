-- je crèe le rôle "admin_oblog" qui a tous les droits
CREATE ROLE admin_api WITH LOGIN PASSWORD 'api';


-- je crèe la BDD "theblog"
CREATE DATABASE api OWNER admin_api;

-- psql -U admin_api -d api -f script/create_table.sql
-- psql -U admin_api -d api -f script/insert_table.sql
-- psql -U admin_api -d api