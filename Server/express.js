const exp =require('express')
const App= exp()

App.get('/', (req, res)=>{
 let data={
    name: 'Ojo Rapheal',
    occupation: 'Software Dev'
 }
 return res.send((JSON.stringify(data)))
})

App.listen(3030,()=>console.log('server is ready '))


App.get()



///express is a framework that help us create server easily 