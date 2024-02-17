-- En este archivo deben estar tus ejercicios de consultas sql

--1.- Empleados ordenados alfabéticamente (Z...A):
--Muestra los nombres de los empleados en orden alfabético descendente.
SELECT NOMBRES
FROM EMPLEADOS
ORDER BY NOMBRES DESC;

--2.- Empleados de Soporte:
--Muestra el nombre, el puesto y la localidad de los empleados con el puesto de 'Soporte'.
SELECT NOMBRES, PUESTO, LOCALIDADES.LOCALIDAD
FROM EMPLEADOS
JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID
JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADES.ID
WHERE PUESTO = 'Soporte';


--3.- Nombres que terminan con 'o':
--Lista los nombres de los empleados cuyo nombre termina con la letra 'o'.
SELECT NOMBRES
FROM EMPLEADOS
WHERE NOMBRES LIKE '%o';

--4.- Empleados en Carlos Paz:
--Muestra el nombre, sueldo y localidad de los empleados que trabajan en la localidad Carlos Paz.
SELECT NOMBRES, SUELDO, LOCALIDADES.LOCALIDAD
FROM EMPLEADOS
JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADES.ID
WHERE LOCALIDADES.LOCALIDAD = 'Carlos Paz';

--5.- Sueldos entre 10000 y 13000:
--Muestra el nombre, sueldo y localidad de los empleados cuyo sueldo se encuentra entre 10000 y 13000.
SELECT NOMBRES, SUELDO, LOCALIDADES.LOCALIDAD
FROM EMPLEADOS
JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADES.ID
WHERE SUELDO BETWEEN 10000 AND 13000;

--6.- Departamentos con más de 5 empleados:
--Visualiza los departamentos que tienen más de 5 empleados.
SELECT DEPARTAMENTO
FROM (
    SELECT DEPARTAMENTO_ID, COUNT(*) AS num_empleados
    FROM EMPLEADOS
    GROUP BY DEPARTAMENTO_ID
    HAVING num_empleados > 5
) AS DepartamentosConMasDe5
JOIN DEPARTAMENTOS ON DepartamentosConMasDe5.DEPARTAMENTO_ID = DEPARTAMENTOS.ID;

--7.- Empleados en Córdoba con puesto de Analista o Programador:
--Muestra los nombres de los empleados que trabajan en Córdoba y tienen el puesto de 'Analista' o 'Programador'.
SELECT NOMBRES
FROM EMPLEADOS
JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
WHERE LOCALIDADES.LOCALIDAD = 'Córdoba' AND PUESTO IN ('Analista', 'Programador');

--8.- Sueldo medio de todos los empleados:
--Calcula el sueldo medio de todos los empleados.
SELECT AVG(SUELDO) AS sueldo_medio
FROM EMPLEADOS;

--9.- Máximo sueldo en el departamento 10:
--Muestra el máximo sueldo de los empleados del departamento 10.
SELECT MAX(SUELDO) AS max_sueldo
FROM EMPLEADOS
WHERE DEPARTAMENTO_ID = 10;

--10.- Sueldo mínimo en el departamento Soporte:
--Calcula el sueldo mínimo de los empleados del departamento 'Soporte'.
SELECT MIN(SUELDO) AS min_sueldo
FROM EMPLEADOS
WHERE DEPARTAMENTO_ID IN (SELECT ID FROM DEPARTAMENTOS WHERE DENOMINACION = 'Soporte');

--11.- Suma de sueldos por puesto:
--Calcula la suma de sueldos para cada puesto.SELECT PUESTO, SUM(SUELDO) AS suma_sueldos
FROM EMPLEADOS
JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID
GROUP BY PUESTO;