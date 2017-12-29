@extends ('main.common.base')

@section ('head')
	<link rel="stylesheet" href="css/reserve.css">
@endsection

@section ('body_class') interior @endsection

@section ('content')
        <div class="hero inner">
        </div>


        <div class="container-fluid cb main-content">

            <div class="content-holder">
                <section class="content section-intro ">
                    <div class="">
                        <h1><strong>Styles</strong></h1>

                </section>
                <section class="content article-content ny">

                    <h1>this is an h1</h1>
                    <h2>This is an h2</h2>
                    <h3>This is an h3</h3>
                    <h4>This is an h4</h4>
                    <h5>This is an h5</h5>
                    <a href="" class="btn blue">Blue Button</a><br><br>
                    <a href="" class="btn teal">Teal Button</a><br><br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam enim repellat tempore sit impedit,
                        ipsum omnis id delectus. Porro, veritatis, aliquid. Veritatis iste nihil quia tempore, quis quas,
                        accusantium molestias nulla eius dignissimos quam, maxime iure tempora minus, assumenda excepturi.
                        Dolorem optio, officia cum doloribus impedit ipsa labore facilis rem!</p>
                    <p>Quas ducimus assumenda quis porro dicta dolore voluptatum, suscipit ab rerum quam ut error cum maiores
                        nulla perspiciatis nobis vero eius alias qui! Neque quos non fugiat, laboriosam sint optio repellat
                        fuga est doloremque quam veniam magni modi accusantium! Eius consectetur delectus quisquam, placeat,
                        quis voluptates officia illum repellendus. Tenetur.</p>
                    <p>Voluptas ratione quibusdam, fuga qui quos perferendis officiis consequuntur tempora saepe explicabo,
                        recusandae sint, impedit accusantium maiores illum sapiente distinctio commodi possimus. Assumenda
                        cumque, molestiae hic aliquam eius. Laboriosam ipsum recusandae provident fugiat non aliquam id ex
                        saepe autem. Repellat adipisci consequuntur nulla vitae beatae possimus, quae necessitatibus nisi
                        fugit.</p>
                    <p>Et nam ut dolore eaque architecto, iusto dignissimos facere, harum, temporibus consequuntur inventore?
                        Voluptates esse numquam, suscipit, quam mollitia quae deleniti nam aliquid blanditiis nobis labore
                        vitae inventore, dicta voluptatem ducimus ipsam. Reiciendis corporis soluta sunt aut deleniti labore
                        perspiciatis ipsa, cumque saepe nobis praesentium, dolores, voluptatibus asperiores pariatur reprehenderit.</p>



                </section>

                @include ('main.common.pickup_section')
                

                </div>

            </div>
@endsection

@section ('script')
<script src="js/reserve.js"></script>
@endsection