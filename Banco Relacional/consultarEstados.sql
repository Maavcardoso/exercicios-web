select * from estados

select sigla, nome from estados
where regiao = 'sul'

select nome, regiao as 'Região', populacao as 'população' from estados
where populacao >= 10
order by populacao desc
