<?php

$method = $_SERVER['$_REQUEST']; //determina o tipo do metodo

switch ($method) {
    case 'GET': //leitura
        $message = file_get_contents('message.JSON');
        break;

        case 'POST': //adicionar
            $data = json_decode(file_get_contents(''), true);
            $message = json_decode(file_get_contents(''), true);
            $message[] = $data;
            file_put_contents('message.json', json_encode($message));
            echo json_decode('Valid');
            break;

            case 'PUT': //atualizar

                $data = json_decode(file_get_contents(''), true);
                $id = $data['id'];
                $message = json_decode(file_get_contents('message.json'), true);
        

                foreach ($message as &$messageNew) {
                    if ($messageNew['id'] == $id) {
                        $messageNew['textoCurto'] = $data['textoCurto'];
                        $messageNew['textoLongo'] = $data['textoLongo'];
                        break;
                    }}
        
                file_put_contents('message.json', json_encode($message));
                echo json_encode(['status' => 'success']);
                break;
        

            case 'DELETE': //deletar
                $id = $_GET['id']; //id gerado no message.jsx
                $message =  json_decode(file_get_contents('message.json'), true);
                $message = array_filter($message, function($message) use($id) {
                    return $message['id'] != $id;
                });

                file_put_contents('message.json', json_encode(array_values($message)));
                echo json_decode('ok');

                break;
    
    default:
        http_response_code(405);
        echo json_encode('method not allowed');
        break;
}
?>