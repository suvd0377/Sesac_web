-- Active: 1732688616928@@127.0.0.1@3306@sesac
show DATABASEs;
use SESAC;

CREATE TABLE visitor(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
)

DESC visitor;

show TABLES;

--data 삽입
INSERT INTO visitor(name, comment) VALUES('홍길동', '내가 왔다');

INSERT INTO visitor VALUES(null, '이찬혁', '으라차차');
INSERT INTO visitor VALUES(null, '삭제 예정', '으라차차');

-- data 조히
SELECT * FROM visitor;

-- data 수정
UPDATE visitor SET comment= "야호~~!" WHERE id=2;

-- data 삭제
DELETE FROM visitor WHERE id=3;

####################### DCL
-- MySQL 서용자 생성
CREATE USER 'sesac'@'%' IDENTIFIED BY 'Mindy815';
GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;
ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY 'Mindy815';
FLUSH PRIVILEGES;
SELECT*FROM mysql.user;
show GRANTS for 'sesac'@'%';

SELECT user, host FROM mysql.user;

SELECT User, Host FROM mysql.user WHERE User = 'sesac';

