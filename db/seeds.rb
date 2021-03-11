# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all
Category.destroy_all
User.destroy_all

@katiana = User.create!(username: "katiana", email:"katiana@gmail.com", password:"123456")

puts "#{User.count} users created"

@lifestyle = Category.create!(name: 'lifestyle')
@beauty = Category.create!(name: 'beauty')
@home = Category.create!(name: 'home')

puts "#{Category.count} categories created"

Product.create!(name: 'Shea Butter', user: @katiana, product_img: 'https://www.wellandgood.com/wp-content/uploads/2020/02/GettyImages-808204214-sized.jpg', product_details: 'Unrefined Shea Butter is a nutrient rich cosmetic butter packed with vitamins and antioxidants. It deeply moisturizes the skin to help soothe and repair dry, itchy, cracked skin and maintain a healthy glow. Its properties also make it effective in evening out skin tone, diminishing blemishes, dark spots, fine lines and wrinkles. Additionally Shea Butter can be used on the scalp or in the hair to stimulate growth, tame frizz and lock in moisture.', price: '4.99', categories: [@beauty])
Product.create!(name: 'Mango Butter', user: @katiana, product_img: 'http://cdn.shopify.com/s/files/1/2028/2057/articles/mango_butter_1024x1024.jpg?v=1599828863', product_details: 'This butter has a lot to offer when it comes to skin care and natural beauty. Mangos are easy to love. Their brightly colored rinds and sweet flesh sing of tropical islands and fun-filled getaways.
Within every colorful mango is a woody kernel – packed with nutrient-dense fats! Those fatty oils are pressed from the kernels and gently refined to create Mango Butter, a creamy moisturizing butter that is perfect for conditioning hair and skin. Mango Butter is an extremely versatile ingredient, perfect for use as-is or in almost any DIY skin or hair care recipe. It has a soft, creamy texture that is easy to use and absorbs beautifully into the skin. It melts upon touch so easily!', price: '4.99', categories: [@beauty])
Product.create!(name: 'African Black Soap', user: @katiana, product_img: 'https://cdn2.stylecraze.com/wp-content/uploads/2018/09/African-Black-Soap-And-Its-Beauty-Benefits-Banner.jpg', product_details: 'Traditional African black soap tends to be brown rather than black, and its usually crafted in or made with ingredients sourced from western Africa, specifically Nigeria or Ghana. It should be free of chemicals like parabens, sulfates, artificial fragrances, and preservatives. The benefits of African black soap include: purifying skin, balancing oil production, healing breakouts, fading scars and has cleansing ang moisturixing properties', price: '4.99', categories: [@beauty])
Product.create!(name: 'Net Nylon Body Exfoliater', user: @katiana, product_img: 'https://images-na.ssl-images-amazon.com/images/I/81JP3V9GtwL._AC_SL1500_.jpg', product_details: 'The key to moisturized healthy glowy skin is clean skin. For centuries upon centuries, the people of West Africa have been utilizing Foos to exfoliate and maintain the beauty of their skin. And now you can too! Directly imported from Guinea, our Net Mesh Body Foos are unlike any wash rags or bath tools you have ever encountered. Its handmade nylon gritty texture gently abrase the skin, removing dead skin cells while unclogging pores for a smooth silky skin finish. Unlike many washcloths, the net design in Foos eliminates water storage, reducing the chances of bacteria growth and perfect for everyday use!', price: '7.00', categories: [@beauty])
Product.create!(name: 'Candles', user: @katiana, product_img: 'https://i.etsystatic.com/18126023/r/il/262736/1611902373/il_570xN.1611902373_nvb4.jpg', product_details: 'All the candles are individually hand poured and hand painted by artisans, most of whom are single mothers, making each a piece of art! Kapula uses only non-toxic color pigments, fully refined high quality paraffin wax, and cotton wicks. The candles are unscented and smokeless. Inspired by the colors of Africa, each design collection has a color theme used in various patterns. These candles make a wonderful gift that keeps on giving!', price: '10.00', categories: [@home])
Product.create!(name: 'Unprocessed Palm Oil', user: @katiana, product_img: 'https://www.excelvite.com/wp-content/uploads/2017/06/redpo08-300x456.jpg', product_details: 'For centuries, people on the African continent, including the ancient Egyptians, used red palm oil (RPO) for culinary purposes. Only recently has the minimally processed palm oil been introduced to Western palates, with variable results. Some people find the red-orange hue unappetizing, while others view the color as a welcome reminder of the oil’s high carotene content. Like other “exotic” edible oils such as coconut and avocado, RPO has attracted a cult following for its supposed health benefits. Whether or not RPO can make the leap from a niche oil to widespread commercial success depends on substantiation of these health claims and on the versatility of the oil for a variety of food applications.', price: '8.00', categories: [@home])

puts "#{Product.count} products created"

