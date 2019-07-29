const path = require('path')

exports.createPages =  ({actions, graphql})=>{
    const {createPage} = actions

    return new Promise((resolve, rej)=>{
        resolve(

            graphql(`

        query{
            newTours: allContentfulTour{
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    
    `).then((resp)=>{
        resp.data.newTours.edges.forEach(({node}) => {
            createPage({
                path: `MyTours/${node.slug}`,
                component: path.resolve('./src/templates/tour-template.js'),
                context: {
                    slug: node.slug
                }
    
            })
            
        })
    })
        )

    })

    
    

}