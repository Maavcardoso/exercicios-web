update estados
set nome  = 'Maranhão'
-- Se esse comando for executado sem definir
-- a linha, ele mudará todos os nomes para maranhão
where sigla = 'MA'

select nome from estados where sigla = 'MA'

update estados
set nome = 'Paraná', populacao = 11.32
where sigla = 'PR'